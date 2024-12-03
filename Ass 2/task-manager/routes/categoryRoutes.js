const express = require('express');
const router = express.Router();

//get all categories
router.get('/', (req, res) => {
    res.json({ message: 'Fetching all categories' });
});

//single category by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fetching category with ID ${id}` });
});

// Create a new category
router.post('/', (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: 'Category created', name });
});

//update an existing category
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Category with ID ${id} updated`, name });
});

//delete a category
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Category with ID ${id} deleted` });
});

module.exports = router;
