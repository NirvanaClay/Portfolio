const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const forceHttps = require("./force-https");
const port = process.env.PORT || 8080;

// Apply force HTTPS middleware
app.use(forceHttps);

app.use(express.static(path.join(__dirname, "build")));

// This route serves the React app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port);