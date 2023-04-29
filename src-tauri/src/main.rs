#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs::OpenOptions;
use std::io::{Write, BufReader, BufRead};
use std::time::Duration;
use tauri::{Window};
use std::time::{SystemTime, UNIX_EPOCH};
extern crate dirs;

#[derive(Clone, serde::Serialize)]
struct Payload {
  data: String,
}

static mut RATE_FROM_FRONT: u64 = 500;

#[tauri::command(rename_all = "snake_case")]
fn change_rate(rate: u64) {
  unsafe {
    RATE_FROM_FRONT = rate;
    println!("{RATE_FROM_FRONT}")
  }
}

#[tauri::command(rename_all = "snake_case")]
fn init_process(port: String, window: Window) {
  std::thread::spawn(move || {
    println!("{port}");
    let mut path = dirs::desktop_dir()
      .expect("Ошибка доступа к домашней директории");
    path.push("logs.txt");
    let mut file = OpenOptions::new()
      .create(true)
      .append(true)
      .open(path)
      .expect("Ошибка при открытии файла");

    let serial_port = serialport::new(port, 9600)
      .timeout(Duration::from_millis(1000))
      .open()
      .expect("Ошибка при открытии Serial Port".into());
  
    let mut port = BufReader::new(serial_port);
    let mut my_str = String::new();

    loop {
      let now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_millis();
      my_str.clear();
      port.get_mut()
            .write_all("<".as_bytes()).expect("Write failed!");
      port.read_line(&mut my_str);
      if my_str != "" {
        window.emit("data", Payload { data: my_str.clone().into() }).unwrap();
        writeln!(file, "createdAt: {:?},  data: {my_str}", now).expect("Ошибка при записи файла");
      }
      unsafe{std::thread::sleep(Duration::from_millis(RATE_FROM_FRONT))};
    }
  });
}

fn main() {
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![init_process, change_rate])
      .run(tauri::generate_context!())
      .expect("Ошибка во время исполнения программы");
  }