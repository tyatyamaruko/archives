const express = require('express');
const app = express();

app.listen(8010, () => {
    console.log("server runninng!");
});

app.get('/', (req, res) => {
    res.json({ "pet": "dog" });
    console.log('received GET request');
    res.end();
});