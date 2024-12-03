const express = require('express');
const router = express.Router();

//all tasks
router.get('/', (req, res) => {
    res.json({ message: 'Fetching all tasks' });
});

//single task by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fetching task with ID ${id}` });
});

//create new task
router.post('/', (req, res) => {
    const { title, description } = req.body;
    res.status(201).json({ message: 'Task created', title, description });
});

//update existing task
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    res.json({ message: `Task with ID ${id} updated`, title, description });
});

//delete a task
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Task with ID ${id} deleted` });
});

module.exports = router;
