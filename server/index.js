const express = require('express');
const bodyParser = require('body-parser');

const PageRouter = require('./routes/PostData');
const cors = require('cors');
const PORT = 5000
const app = express();
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/nyango', PageRouter);


app.listen(5000, () => {
    console.log('Starting server in port 5000 ');
});
