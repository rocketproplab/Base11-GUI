const fs = require('fs');
const sql = require('sql.js');

// open the Database
const filebuffer = fs.readFileSync('data.db');
const db = new sql.Database(filebuffer);
const contents = db.exec("SELECT * FROM telemetry");
