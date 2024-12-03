const express = require('express');
const router = express.Router();

//get all users
router.get('/', (req, res) => {
    res.json({ message: 'Fetching all users' });
});

//get a single user by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Fetching user with ID ${id}` });
});

//create a new user
router.post('/', (req, res) => {
    const { username, email } = req.body;
    res.status(201).json({ message: 'User created', username, email });
});

//update an existing user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    res.json({ message: `User with ID ${id} updated`, username, email });
});

//delete a user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User with ID ${id} deleted` });
});

module.exports = router;
