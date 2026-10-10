let tasks = [];
let nextId = 1;

exports.getAll = () => tasks;

exports.getById = (id) => tasks.find(t => t.id == id);

exports.create = (data) => {
  const newTask = {
    id: nextId++,
    title: data.title.trim(),
    description: data.description || "",
    completed: false,
    priority: data.priority || "high",
    dueDate: data.dueDate || new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  tasks.push(newTask);
  return newTask;
};

exports.update = (id, data) => {
  const task = tasks.find(t => t.id == id);
  if (!task) return null;
  if (data.title!== undefined) task.title = data.title;
  if (data.completed!== undefined) task.completed = data.completed;
  if (data.description!== undefined) task.description = data.description;
  if (data.priority!== undefined) task.priority = data.priority;
  task.updatedAt = new Date().toISOString();
  return task;
};

exports.remove = (id) => {
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};