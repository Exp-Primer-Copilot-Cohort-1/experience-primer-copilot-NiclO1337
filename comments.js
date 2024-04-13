// create web server
// create an express application
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// define the port
const port = 3000;

// define the path to the data file
const dataPath = path.join(__dirname, 'data', 'comments.json');

// middleware to parse the request body
app.use(bodyParser.json());

// GET /comments
// return the list of comments
app.get('/comments', (req, res) => {
    // read the comments from the file
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }

        // send the comments as json
        res.json(JSON.parse(data));
    });
});

// POST /comments
// create a new comment
app.post('/comments', (req, res) => {
    // read the comments from the file
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }

        // parse the comments
        const comments = JSON.parse(data);

        // create a new comment object
        const newComment = {
            id: uuidv4(),
            text: req.body.text, // get the text from the request body
            date: new Date().toISOString()
        };
    });
});