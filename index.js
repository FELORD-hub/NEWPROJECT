const express = require('express')
const app = express();
const port = 4164;

app.get('/', (req, res) => {
    res.send('Good morning, Kenya')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});