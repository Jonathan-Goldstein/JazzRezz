const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT  || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// DATA
const rezzy = [{}];



//LISTENING
app.listen(PORT, () => console.log('App listening on Port: 3001'))