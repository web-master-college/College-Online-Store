const mainPage = (request, response) =>{
    response.render('Home', {
        title: 'Ivory Store Homepage'
    });
}


module.exports = {
    mainPage
}