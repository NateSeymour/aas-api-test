import express from 'express';

const app = express();

let count = 0;

app.get('/', (req, res) => {
  res.send(`Times visited since last deployment: ${++count}`);
});

app.listen(process.env.PORT || 3000);