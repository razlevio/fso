import express from "express";
import morgan from "morgan";

const server = express();
server.use(express.json());


server.use(morgan(function (tokens, req, res) {
    return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    req.method === "POST" ? JSON.stringify(req.body) : ""
    ].join(' ')
  }));

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

server.post("/api/persons", (req, res) => {
    const newId = Math.floor(Math.random() * 10000000000);
    const { name, number } = req.body;
    if(!name || !number) return res.status(400).json({error: "name or number missing"});
    if(phonebook.find(pers => pers.name.toLowerCase() === name.toLowerCase())) return res.status(400).json({error: "name must be unique"});
    phonebook.push({id: newId, name: name, number: number});
    res.send(`Added ${name} with number ${number} to phonebook`);
});

server.delete("/api/persons/del/:id", (req, res) => {
    const id = Number(req.params.id);
    phonebook = phonebook.filter(pers => pers.id !== id);
    res.status(204).end()
});

server.listen(port, () => console.log(`Server running on port ${port}`));

