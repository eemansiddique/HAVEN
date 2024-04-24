

// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require("dotenv").config();

// CORS Configuration
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:5173'
};

// Middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Routes
const userRoute = require('./routes/userRoute');
app.use('/', userRoute);
//adminRoute
const adminRoute = require('./routes/adminRoute')
app.use('/admin', adminRoute)

//expert route
const expertRoute = require('./routes/expertRoute')
app.use('/experts', expertRoute)

// Database connection
const dbUrl = process.env.MONGO_URI;
mongoose.connect(dbUrl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database");
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error("Error connecting to the database:", error);
});

// Handling CORS preflight requests (OPTIONS)
app.options('*', cors(corsOptions));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});