import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => 
  res.send('Hello World')
);

app.listen(3000, () => {
  console.log('Exemple app listening on port 3000!')
});
