import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });

const app = express();

app.use(express.json());

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.on('error', (err) => {
  console.error('Error starting the server:', err.message);
});

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);