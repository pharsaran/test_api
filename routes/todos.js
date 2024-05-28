const express = require('express');
const router = express.Router();

let todos = []; // อาร์เรย์ที่ใช้เก็บรายการ To-Do

// ดึงรายการ To-Do ทั้งหมด
router.get('/', (req, res) => {
  res.json(todos);
});

// เพิ่มรายการ To-Do
router.post('/', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// อัพเดทรายการ To-Do
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.title = req.body.title !== undefined ? req.body.title : todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// ลบรายการ To-Do
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

module.exports = router;
