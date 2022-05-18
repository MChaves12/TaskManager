const express = require('express');
const app = express();
const tasks = require('./public/routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./public/middleware/not-found');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`servidor na porta ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
