
const express = require('express')
const cors = require('cors')
const { Pool } = require('pg');
const app = express()

app.use(cors());
app.use(express.json())

const port = 4000;


// Connect to  PostgreSQL database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EToken',
    password: 'root@123',
    port: 5432, 
  });
  

app.get('/api/hello', (req, res) => {
    const message = 'Hello World from the backend';
    res.json({ message });
});



app.post('/api/register', async (req, res) => {
    const { name, email, password, balance } = req.body;
  
    try {
      const query = 'INSERT INTO users (name, email, password, balance) VALUES ($1, $2, $3, $4)';
      await pool.query(query, [name, email, password, balance]);
      res.json({ message: 'Your account is successfullly registered!' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Registration Failed!' });
    }
});


app.listen(port, () => {
    console.log('Server running at port ' + port)
})
