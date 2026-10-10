const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/todo.controller');

router.get('/', ctrl.getAllTodos);
router.get('/:id', ctrl.getTodo);
router.post('/', ctrl.createTodo);
router.patch('/:id', ctrl.updateTodo); // Requirement: PATCH
router.delete('/:id', ctrl.deleteTodo);

module.exports = router;