import express from 'express';
import ConnectDB from "./connection.js";
import cors from 'cors';

import dotenv from 'dotenv';

import userRoutes from './src/routes/userRoutes.js'

dotenv.config();
// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to PetCare API!');
});

// Mount user routes
app.use('/user', userRoutes);

// Start the server
const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, async () => {
  try {
    await ConnectDB();
    console.log(`Server is running on port ${PORT} and DB connected`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
});
