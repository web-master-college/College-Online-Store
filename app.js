const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = 3000;
const path = require('path');
const HomePageRoutes = require('./routes/Home');
const {sequelize} = require('./utils/database');

// products


// const ProductConroller = require('./controllers/Product');

// HTTP -> GET, POST, DELETE , PUT

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname,'public')));
app.use(HomePageRoutes);


// Homepage
// app.get('/', HomeController.homePage);

// app.get('/products', ProductConroller.showProducts);




app.listen(PORT, async function(){
    console.log(chalk.magenta('Server is running!'));
    try {
        await sequelize.authenticate();
        console.log(chalk.magenta('Connection has been established successfully.'));
      } catch (error) {
        console.error(chalk.bgCyan('Unable to connect to the database:'), error);
      }

});