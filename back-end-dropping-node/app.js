const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

const dbConfig = {
  host: '20.195.206.76',
  user: 'admin',
  password: '@dm!n',
  database: 'dropping',
};

async function testDatabaseConnection() {
    try {
      const connection = await mysql.createConnection(dbConfig);
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      await connection.end();
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  }
  
  testDatabaseConnection();

app.post('/api/products', async (req, res) => {
    try {
      const { brand, name, size, color, gender } = req.body;

      const connection = await mysql.createConnection(dbConfig);
  
      const [result] = await connection.execute(
         'INSERT INTO produtos (brand, name, size, color, gender) VALUES (?, ?, ?, ?, ?)',
         [brand, name, size, color, gender]
      );
  
      await connection.end();
  
      res.status(201).json({ id: result.insertId, brand, name, size, color, gender });
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
      res.status(500).json({ error: 'Erro ao criar o produto' });
    }
  });
  

app.get('/api/products', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM produtos');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    const connection = await mysql.createConnection(dbConfig);
    
    const [rows] = await connection.execute('SELECT * FROM produtos WHERE id = ?', [productId]);
  
    await connection.end();
    if (rows.length > 0) {
      res.json(rows[0]); 
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar produto por ID' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const connection = await mysql.createConnection(dbConfig);
      const [result] = await connection.execute('DELETE FROM produtos WHERE id=?', [id]);
  
      await connection.end();
  
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Produto não encontrado' });
      } else {
        res.json({ message: 'Produto excluído com sucesso' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
  });

    app.put('/api/products/:id', async (req, res) => {
    try {
      const { brand, name, size, color, gender } = req.body;
      const { id } = req.params;

      const connection = await mysql.createConnection(dbConfig);

      const [result] = await connection.execute(
        'UPDATE produtos SET brand=?, name=?, size=?, color=?, gender=? WHERE id=?', [brand, name, size, color, gender, id]
      );

      await connection.end();
        
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Produto não encontrado' });
      } else {
        res.json({ id, brand, name, size, color, gender });
      }
  } catch (error) {
    console.error('Erro ao atualizar o produto:', error);
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
  }
});

  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
