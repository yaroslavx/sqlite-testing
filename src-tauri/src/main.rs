#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs::OpenOptions;
use std::io::{Write, BufReader, BufRead};
use std::time::Duration;
use home::home_dir;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command]
fn transfer_data(port: String) -> String {
    println!("{port}");

    let mut path = home_dir()
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
    .expect("Failed to open serial port");

  let mut reader = BufReader::new(serial_port);
  let mut my_str = String::new();

  loop{
    my_str.clear();
    reader.read_line(&mut my_str);
    my_str.into();
    writeln!(file, "{my_str}").expect("Ошибка при записи файла");
  }

}

#[tauri::command]
fn log(port: String) {
    println!("{port}");
  let mut path = home_dir()
    .expect("Ошибка доступа к домашней директории");
  path.push("logs.txt");

  let mut file = OpenOptions::new()
    .create(true)
    .append(true)
    .open(path)
    .expect("Ошибка при открытии файла");
  writeln!(file, "{port}").expect("Ошибка при записи файла");
}

fn main() {
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![log, transfer_data])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
  }