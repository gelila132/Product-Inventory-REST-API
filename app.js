const express = require('express');

const app = express();

const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});