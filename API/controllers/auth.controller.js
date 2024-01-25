import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body;

//this prevents entering null string 
    if(!username || !email || !password ||username == ''||email==''||password==''){
       next(errorHandler(400,"All fields are required"));
    }


    const hashedpassword = bcryptjs.hashSync(password,10);


//adding user name and password to string
    const newUser = new User({
        username:username,
        email:email,
        password:hashedpassword,
    });

    //this gives error message and handle the save part
    try{
        await newUser.save();
        res.json('signup Successful');
    }
    catch(err){
        next(err);
    }
    
    
};