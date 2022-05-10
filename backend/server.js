const express = require("express");
const res = require("express/lib/response");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

//fetching all the notes data
app.get("/api/notes", (req, res) => {
  //we are requesting the data through this endpoints i.e., /api/notes to the backend
  res.json(notes); //this notes is the notes.js data // and the backend serves the data  through express JS to our frontend
});

//fetching single note data
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

const PORT = process.env.PORT || 5000; //if that port not available we can use our default port 5000
app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); // creating web server
