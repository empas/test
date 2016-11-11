'use strict';

const express = require('express');
const cors    = require('cors');
const app     = express();
const port    = 3000;

const beforeUnameRE = /^((https?)?:?(\/\/)?([\w-.]*)?\/)/i;
const afterUnameRE = /((\/|\?).*)|@/ig;

let parseUserName = (url) => {

    let username = url.replace(beforeUnameRE, '').replace(afterUnameRE, '');

    return '@'+username;

};

app.use(cors());
app.get('/',(req, res) => {

    console.log('req.query');
    console.log(req.query);

    let url = req.query.username;

    res.send(parseUserName(url));

});

const server = app.listen(port);

console.log('Server is listening on port ' + port);
