import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.listen(process.env.PORT || 3000);