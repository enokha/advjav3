const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(express.json());  
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);

module.exports = app;
