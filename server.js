import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let queue = [];

app.get('/patients', (req, res) => {
  res.json([...queue].sort((a, b) => a.priority - b.priority));
});

app.post('/checkin', (req, res) => {
  const { name, emergency, symptoms } = req.body;
  queue.push({ id: Date.now(), name, priority: parseInt(emergency), symptoms });
  res.json({ status: 'added' });
});

app.post('/checkout', (req, res) => {
  queue = queue.filter(p => p.id !== req.body.id);
  res.json({ status: 'removed' });
});

app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
