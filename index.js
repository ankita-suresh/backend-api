const express= require('express');

const bodyParser = require('body-parser');

const logRoutes = require('./routes/log');

const errorController = require('./controller/error')
 
const app = express(); 

const ports= process.env.PORT || 3000;

app.use(bodyParser.json());
process.setMaxListeners(0);


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //Anyone can access it
    res.setHeader('Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
})

app.use('/log', logRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, ()=> console.log(`listening on port ${ports}`));