const express = require('express');
const app = express();
const port = 3000;
const items = ['Apple', 'Banana', 'Orange'];

app.use(express.json());

app.use((req, res, next) => {
console.log(`${req.method} ${req.url}`);
next();
});

app.use(express.static('public'));

app.get('/items', (req, res) => {
res.json(items);
});

app.post('/items', (req, res) => {
const newItem = req.body.item;
if (newItem) {
items.push(newItem);
console.log("Item added:", newItem); // Log item to check
}
res.json(items);
});

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
res.send('Hello, World!');
});

app.get('/about', (req, res) => {
res.send('About Us');
});

app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
