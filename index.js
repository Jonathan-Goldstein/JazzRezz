const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT  || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// DATA
const rezzy = [{}];


//routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/reserve", (req, res) => res.sendFile(path.join(__dirname, "reserve.html")));

app.get("/tables", (req, res) => res.sendFile(path.join(__dirname, "tables.html")));

app.post("/api/reserve", (req, res) => {
	const newRezzy = req.body;
	rezzy.push(newRezzy);
});


//LISTENING
app.listen(PORT, () => console.log('App listening on Port: 3001'))