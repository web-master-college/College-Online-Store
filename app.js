const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = 3000;
const path = require('path');
const HomePageRoutes = require('./routes/Home');
const ProductRoutes = require('./routes/Product');
const AuthRoutes = require('./routes/Auth');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const ApiRoutes = require('./routes/Api');
const {sequelize} = require('./models');
// products

app.use(cookieParser());
app.use(bodyParser.urlencoded());
// const ProductConroller = require('./controllers/Product');

// HTTP -> GET, POST, DELETE , PUT

app.set('view engine', 'ejs');
// app.use(express.json())

app.use(express.static(path.join(__dirname,'public')));
app.use('/product', ProductRoutes);
app.use('/auth', AuthRoutes);
app.use(HomePageRoutes);
app.use('/api', ApiRoutes);



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