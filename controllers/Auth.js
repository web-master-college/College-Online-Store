const bcrypt = require('bcrypt');
const saltRounds = 10;
const {User} = require('../models');


const SignUp = async (request, response) =>{
        const {name, email, password, confirmPassword} = request.body;   
        const result = {status: true, message: '', action: 'signup'};

        if(password !== confirmPassword){
            result.message = 'Error: Passwords are mismatch';
            result.status = false;
        }

        try{
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            await User.create({
                username: name,
                email, 
                password: encryptedPassword
            })    
            result.message = 'User has been registered successfully';
            result.status = true;

        }catch(error){
            result.message = error.message;
            result.status = false; 
        }
        response.cookie('signup', JSON.stringify(result));
        response.redirect('/');
        
}

const SignIn = (request, response) =>{
 
}



module.exports = {
    SignUp,
    SignIn
}