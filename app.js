const express = require ('express');
const app = express ();

app.get('/', (req, res) => {
    res.send ("Welcome to my home page on 01-Sep-2023");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("WhatsApp");
});

