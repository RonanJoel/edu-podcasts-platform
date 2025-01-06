const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// ...existing code...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
