const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/product'); // Adjust the path as per your project structure

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
   
})
.then(() => {
    console.log("Database connected");

    // Define routes
    app.use('/api', productRoutes);

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error(err.message));
