const express = require('express');
const wiki = require("./wiki");
const shop = require("./shop");

const app = express();
const port = 3000;


app.use("/wiki", wiki);
app.use("/shop", shop);

app.get("/", (req, res) => {
    res.send("Home Page Main");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

