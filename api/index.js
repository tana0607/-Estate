const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');
const listingRouter = require('./routes/listing.route.js');
const cookieParser = require('cookie-parser');
const path = require('path');
const Connect =require('./connection.js')
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const clientPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientPath));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, async() => {
  try{
    await Connect
    console.log(`Server is running on port ${port}!`);
  }catch(err){
    console.log("Error while connecting to database ",err);
  }
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
