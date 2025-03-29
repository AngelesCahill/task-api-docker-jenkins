import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});

// Exportar app para pruebas
export default app;

const PORT = 3000;
app.listen(PORT, () => console.log(`API is running on port ${PORT}`));