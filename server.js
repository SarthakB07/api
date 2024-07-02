// news article post,
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
const db=require("./config/db");

app.use(bodyParser.json());
app.use(express.json());
app.use('/api/users', userRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});