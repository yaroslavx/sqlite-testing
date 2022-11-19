let sql;
const sqlite3 = require('sqlite3').verbose();

// Connect to DB
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// Create a table
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`;
// db.run(sql);

// Drop a table
// db.run('DROP TABLE users');

// Insert data into database
sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
db.run(
  sql,
  ['second', 'third', 'last', 'first', 'another_mail@mail.com'],
  (err) => {
    if (err) return console.error(err.message);
  }
);

// // Updata data
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ['newRandomName', 1], (err) => {
//   if (err) return console.error(err.message);
// });

// Delete data
// sql = `DELETE FROM users WHERE id = ?`;
// db.run(sql, [1], (err) => {
//   if (err) return console.error(err.message);
// });

// Query the data
sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach((row) => console.log(row));
});
