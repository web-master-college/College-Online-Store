const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = 3000;
const path = require('path');
const HomeController = require('./controllers/Home')
const ProductConroller = require('./controllers/Product');

// HTTP -> GET, POST, DELETE , PUT

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

// Homepage
app.get('/', HomeController.mainPage);

app.get('/products', ProductConroller.showProducts);




app.listen(PORT, function(){
    console.log(chalk.magenta('Server is running!'));
});