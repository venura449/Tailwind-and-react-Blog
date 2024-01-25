import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';


export const signup = async(req,res)=>{
    const {username,email,password} = req.body;

//this prevents entering null string 
    if(!username || !email || !password ||username == ''||email==''||password==''){
        return res.status(400).json({msg:"Please fill out all fields"})
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
        res.status(500).json({message:err.message});
    }
    
    
};