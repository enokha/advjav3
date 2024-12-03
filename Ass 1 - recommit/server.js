const express = require('express');
const app = express();
app.use(express.json());

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

//get all baooks
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

//add books
app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.status(201).json(book);
});

// update a book
app.put('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index >= 0) {
        books[index] = { id: books[index].id, title: req.body.title, author: req.body.author };
        res.status(200).json(books[index]);
    } else {
        res.status(404).send('Book not found');
    }
});

// delete a book
app.delete('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index >= 0) {
        books.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Book not found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
