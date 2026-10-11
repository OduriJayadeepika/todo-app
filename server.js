// const app = require('./app');
// const PORT = 3000;
// // const PORT=process.env.PORT || 5000
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const path=require('path');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));

let tasks = [];

// 1. THIS IS FOR BROWSER - Home page
app.get('/', (req, res) => {
  res.send(`
    <h1>✅ Todo API is Running!</h1>
    <p>Your backend is LIVE</p>
    <ul>
      <li><a href="/tasks">Click here to see Tasks - /tasks</a></li>
    </ul>
    <style> body{font-family:sans-serif; text-align:center; margin-top:50px} a{color:blue} </style>
  `);
});

// 2. Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// 3. Add task
app.post('/tasks', (req, res) => {
  const task = { id: Date.now(), text: req.body.text };
  tasks.push(task);
  res.json(task);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});