const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};
app.use(express.json())
app.use(cors(corsOptions))

mongoose
  .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connceted!'))
  .catch((err) => console.error(err))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const noteRoutes = require('./routes/notes')
app.use('/api/notes', noteRoutes)