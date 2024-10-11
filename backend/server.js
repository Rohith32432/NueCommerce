const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const userRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const app = express();
// const Assosiactions =require('./config/Assosiactions')

// const sync=require('./config/Assosiactions')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());




app.use('/image',express.static(`${__dirname}/uploads`))
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
