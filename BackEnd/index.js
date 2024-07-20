const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
var app = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/api/product', require('./routes/product.route.js'));
app.use('/api/supplier', require('./routes/supplier.route.js'));
app.use('/api/user', require('./routes/user.route.js'));

app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
