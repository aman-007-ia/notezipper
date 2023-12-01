const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.get("/",(req,res)=>{
    res.send("API is running")
})

app.get("/api/notes",(req,res)=>{
    res.json(notes)
})

app.get("/api/notes/:id",(req,res)=>{
    // const noteId = parseInt(req.params.id);
    const note = notes.find((n) => n._id === req.params.id);

    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    else{
        return res.send(note)
    }


})
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server started on Port ${PORT}`))