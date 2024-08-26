const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();



// Middleware
app.use(cors());
app.use(express.json());


// Placeholder for routes (to be added later)
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/courses', require('./routes/courseRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// Error handling middleware
// app.use(require('./middleware/errorMiddleware'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
