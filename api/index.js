import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use('/api/user', userRouter)

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB connected!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000!');
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

