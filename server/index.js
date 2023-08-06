require("dotenv").config();
const cors = require("cors"); //Cross-origin resource sharing
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hello!!");
});

///FOR ERROR 
app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is runnning on PORT: ${PORT}`);
});