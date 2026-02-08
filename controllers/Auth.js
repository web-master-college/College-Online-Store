const bcrypt = require('bcrypt');
const saltRounds = 10;
const {User} = require('../models');
const {Op} = require('sequelize');
var jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../utils/database');


const logOut = async (request, response) =>{
        await request.session.destroy();
        response.clearCookie('      ');
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

const SignIn = async (request, response) =>{
            const {password, userOrEmail} = request.body;

            const user = await User.findOne({
                attributes: ['password', 'username'],
                where:{
                    [Op.or]:{
                        username: userOrEmail,
                        email: userOrEmail
                    }
                },
                raw: true
            })
            
            if(!user){
                response.json('User was not found!');
                return;
            }
            const token = jwt.sign(user, PRIVATE_KEY, {expiresIn: '24h' });
            response.cookie('token', token);
            response.redirect('/');
            // response.json('User found: ' + JSON.stringify(user));
} 



module.exports = {
    SignUp,
    SignIn,
    logOut
}