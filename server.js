const express = require('express')
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./index.html'));
})

app.get('/cbfCamp.plist', function (req, res) {
    res.sendFile(path.resolve('./cbfCamp.plist'));
})

app.get('/CbfCamp.ipa', function (req, res) {
    res.sendFile(path.resolve('./CbfCamp.ipa'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})