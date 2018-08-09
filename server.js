// DEPENDENCIES
// ===================================================
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// EXPRESS CONFIGURATION
// ===================================================
const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./routes");

// Middleware to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogposts");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});