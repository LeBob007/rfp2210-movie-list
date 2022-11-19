const express = require('express');
const path = require('path');
const db = require('./db');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes.js');
const clientPath = path.join(__dirname, '../client/dist')

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
app.use(express.static(clientPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})