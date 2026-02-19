import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/getData/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Hello from the server! ID: ${id}` });
});

app.post('/api/postData', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully!', receivedData: data });
});

