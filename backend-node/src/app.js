import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

//obtener usuarios
app.get('/api/users', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
});

//crear usuarios
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;
    await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.json({message: 'Usuario creado'});
});

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});