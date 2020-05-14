const express = require('express')
const dotenv = require('dotenv');
const routes = require('./routes');

// Set up environment file
dotenv.config();
const app = express()

// Insert the routes under the /api url
app.use('/api', routes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port port!`))