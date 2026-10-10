const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "API LIVE", endpoints: "/tasks" });
});


app.use('/tasks', todoRoutes);

module.exports = app;