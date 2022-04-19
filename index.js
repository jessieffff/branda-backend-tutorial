const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let newShip = require("./routes/newShip");
let getShip = require("./routes/getShip");
let getShipByChar = require("./routes/getShipByChar");
let update = require("./routes/update");

// on every request, parse the request body using this library.
app.use(bodyParser.json());
// on a request to /, use the newShip code.
// note that the entire URL including the one declared in the file must match.
app.use("/",newShip);

//on a request to getShip/, use the getShip code.
app.use("/", getShip);

//on a request tp getShipByChar
app.use("/", getShipByChar);

//on a request tp getShipByChar
app.use("/", update);

app.listen(PORT, () => console.info("Server has started on", PORT));

const DB = require("./db");