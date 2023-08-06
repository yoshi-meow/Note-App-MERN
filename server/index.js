require("dotenv").config();
const cors = require("cors"); //Cross-origin resource sharing
const express = require("express");
const connectDB = require("./connectDB");
const Notes = require('./models/notes')

const app = express();
const PORT = process.env.PORT || 8000;


connectDB();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Get all notes
app.get("/api/notes", async (req, res) => {
    try {
        const data = await Notes.find({});

        if(!data) {
            throw new Error('An error occured while fetching notes.');
        }
        res.status(201).json(data);
        
    } catch (error) {
        res.status(500).json({error: 'An error occured while fetching notes.....'});
    }
});






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