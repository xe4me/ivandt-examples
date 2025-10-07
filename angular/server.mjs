import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
app.use(cors());
app.use(express.json());

const secretKey = process.env.IVANDT_SECRET_KEY;

app.get('/api/sessions', async (req, res) => {
  try {
    const response = await fetch('https://api.ivandt.com/api/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        endUserId: 'some-user-id-for-tracking',
        endUserEmail: 'john-doe@gmail.com',
        expiresIn: 3600,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});
