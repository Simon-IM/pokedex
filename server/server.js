const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to serve static files
app.use(express.static('assets'));

// routes
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html'));


// 404 response/unhandled routes
app.use('*', (req, res, next) => {
  res.status(404).send('404: Page Does Not Exist!');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));