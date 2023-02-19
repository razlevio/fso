import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const server = express();
server.use(cors());
server.use(express.json());
const port = process.env.PORT || 5000;

let notes = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

server.get("/api/persons", (req, res) => {
    res.json(notes);
});
