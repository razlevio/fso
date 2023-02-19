import express from "express"

const server = express();
server.use(express.json());
const port = process.env.PORT || 5001;

let phonebook = [
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

server.get("/", (req, res) => res.send("<h1>Phonebook Server</h1>"))

server.get("/api/persons", (req, res) => {
    res.json(phonebook)
});

server.get("/info", (req, res) => {
    const date = new Date().toUTCString()
    const numOfPeople = phonebook.length;
    res.send(`<div><h2>Phonebook has info for ${numOfPeople} people</h2><h3>${date}</h3></div>`)
});

server.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = phonebook.filter(pers => pers.id === id)
    if(data.length === 0) res.status(404).end()
    else res.json(data);
});

server.delete("/api/persons/del/:id", (req, res) => {
    const id = Number(req.params.id);
    phonebook = phonebook.filter(pers => pers.id !== id);
    res.status(204).end()
});

server.listen(port, () => console.log(`Server running on port ${port}`));

