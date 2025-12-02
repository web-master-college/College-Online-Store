const bcrypt = require('bcrypt');
const saltRounds = 10;
const {User} = require('../models');

const logOut = async (request, response) =>{
        await request.session.destroy();
        response.redirect('/');
}


const SignUp = async (request, response) =>{
        const {name, email, password, confirmPassword} = request.body;
        const result = {status: true, message: '', action: 'signup'};
        let user = null;
        try{
            if(password !== confirmPassword){
                result.message = 'Error: Passwords are mismatch';
                result.status = false;
                throw new Error(result.message);
            }
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            user = await User.create({
                username: name,
                email, 
                password: encryptedPassword
            })    
            result.message = 'You have been registered successfully';
            result.status = true;

        }catch(error){
            result.message = error.message;
            result.status = false; 
        }


        // response.cookie('signup', JSON.stringify(result));
        request.session.user = user;
        response.redirect('/');
        
}

const SignIn = (request, response) =>{
 
}



module.exports = {
    SignUp,
    SignIn,
    logOut
}