const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');


require('./db')();
const duckRouter = require('./routes/duckRoutes')
const errorHandler = require('./middlewere/errorHandler')

// Cors
app.use(cors());

// Greet on root route
app.get('/', (req, res) => res.send('The ducks are coming!'));

// General middlewares
app.use(express.json())

// Routes
app.use('/ducks', duckRouter)

// Error handling
app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));


