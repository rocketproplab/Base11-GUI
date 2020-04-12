const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the telemetry database.');
});

var dataEntry = null;

function getData() {
    db.serialize(() => {
        db.get(`SELECT * FROM telemetry ORDER BY timestamp DESC LIMIT 1`, (err, entry) => {
          if (err) {
            console.error(err.message);
            return null;
          }
          console.log("Done");
          dataEntry = entry.connectionStatus;
          console.log(dataEntry)
        });
    });
}

getData();
console.log(dataEntry);



db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
  console.log(dataEntry);
});
