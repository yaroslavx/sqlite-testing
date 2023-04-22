#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs::OpenOptions;
use std::io::{Write, BufReader, BufRead};
use std::time::Duration;
use home::home_dir;
use tauri::{Window};

#[derive(Clone, serde::Serialize)]
struct Payload {
  data: String,
}

static mut rate_from_front: u64 = 1000;


#[tauri::command(rename_all = "snake_case")]
fn change_rate(rate: u64) {
  unsafe {
    rate_from_front = rate;
    println!("{rate_from_front}")
  }
}

#[tauri::command(rename_all = "snake_case")]
fn init_process(port: String, window: Window) {
  std::thread::spawn(move || {
    println!("{port}");
    // let mut path = home_dir()
    //   .expect("Ошибка доступа к домашней директории");
    // path.push("logs.txt");
    // let mut file = OpenOptions::new()
    //   .create(true)
    //   .append(true)
    //   .open(path)
    //   .expect("Ошибка при открытии файла");

    let serial_port = serialport::new(port, 9600)
      .timeout(Duration::from_millis(1000))
      .open()
      .expect("Ошибка при открытии Serial Port".into());
  
    let mut port = BufReader::new(serial_port);
    let mut my_str = String::new();

    loop {
      my_str.clear();
      port.get_mut()
            .write_all("<".as_bytes()).expect("Write failed!");
      
      port.read_line(&mut my_str);
      unsafe{std::thread::sleep(Duration::from_millis(rate_from_front))};
      window.emit("data", Payload { data: my_str.clone().into() }).unwrap();
      // writeln!(file, "{my_str}").expect("Ошибка при записи файла");
    }
  });
}

fn main() {
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![init_process, change_rate])
      .run(tauri::generate_context!())
      .expect("Ошибка во время исполнения программы");
  }