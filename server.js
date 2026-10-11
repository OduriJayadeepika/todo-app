// const app = require('./app');
// const PORT = 3000;
// // const PORT=process.env.PORT || 5000
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let tasks = [];
let idCounter = 1;

// GET
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// ADD
app.post('/tasks', (req, res) => {
  const title = req.body.title || req.body.text;
  if (!title) return res.status(400).json({error: "title required"});
  const newTask = { id: idCounter++, title: title, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

// DONE - Toggle
app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.map(t => {
    if (t.id === id) {
      return { ...t, completed: !t.completed };
    }
    return t;
  });
  res.json({ message: "updated", tasks });
});

// DELETE
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "deleted", tasks });
});

// Frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));