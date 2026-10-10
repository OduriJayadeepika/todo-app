const service = require('../services/todo.service');

exports.getAllTodos = (req, res) => {
  res.status(200).json(service.getAll());
};

exports.getTodo = (req, res) => {
  const todo = service.getById(req.params.id);
  if (!todo) return res.status(404).json({ error: "Task not found" });
  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTodo = service.create(req.body);
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const updated = service.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Task not found" });
  res.json(updated);
};

exports.deleteTodo = (req, res) => {
  const ok = service.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
};