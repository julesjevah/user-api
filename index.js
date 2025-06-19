const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// In-memory data store
const users = {};

// POST /users → Create a user
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const id = uuidv4();
  const newUser = { id, name, email };
  users[id] = newUser;

  res.status(201).json(newUser);
});

// GET /users/:id → Get user by ID
app.get('/users/:id', (req, res) => {
  const user = users[req.params.id];

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  res.json(user);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  