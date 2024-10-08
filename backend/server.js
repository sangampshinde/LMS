const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require("./routes/authRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");


// Load environment variables
dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// authentication middleware 
app.use("/api/auth",authRoutes);

// Use course routes
app.use('/api/courses', courseRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
