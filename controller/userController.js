/*this controller contain functionalities like registerUser,loginUser,getsingleUser
 updateUser logoutUser and i also used try catch block for handling errors*/


const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register user function,password will be hashed with the help of BCRYPT

exports.registerUser = async(req,res) => {

    try{

        req.body.password = await bcrypt.hash(req.body.password,10);
        const user = await User.create(req.body);
        res.status(201).send(user);  //201 for request has been fullfilled(created)
    }

    catch(error){
        console.log(error);
    }
}
//register user function ends

//loginuser function starts.
//a token will be generated throught JWT and i will store that token in COOKIES for authentication purpose

exports.loginUser = async(req,res) => {

    try{
        const {email,password} = req.body;

        if(!email || !password)
        res.status(400).send("please enter email and password");  //400 servere cannot process due to client error (bad request)

        const user = await User.findOne({email}).select("password"); 
        //console.log("user: ",user);
        if(!user)
        res.status(404).send("please enter valid email and password"); //404 request not found on server

        const isPasswordMatched = await bcrypt.compare(password,user.password);

        if(!isPasswordMatched)
        res.status(401).send("invalid email id or password");  //401 for unauthorized request

        console.log(user);
        const token = await user.getJWTToken();
        //console.log("token: ",token);
        const options = process.env.COOKIE_EXPIRE;
        res.cookie("token",token,options);
        //console.log("cookies: ",req.cookies);
        res.status(200).send(token);  //200 standard response for success;
    }

    catch(error){
        console.log("error is: ",error);
    }
}
//loginUser functin end


/*getSingleUser function start.
this will return details of single user which i demand of particular ID.*/ 
exports.getSingleUser = async(req,res) => {

    try{

        const id=req.params.id;
        if(id.length!=24)
        res.status(400).send("id is not in correct format"); // 400 for bad request
        const user = await User.findOne({_id:id});
        if(!user)
        res.status(404).send("user not found");  //404 for not found data

        //console.log("user: ",user);
         res.status(200).send(user);
    }

    catch(error){
        console.log("error is: ",error);
    }
}
//getSingleUser function ends.

/*updateUsr function starts.
it will update data of any particular Id which user wants.*/

exports.updateUser = async (req,res) => {

    try{

        if(req.params.id.length!=24)
        res.status(400).send("id is not in correct format");  // 400 for bad request
        const token = req.cookies.token;
        const encr_data = await jwt.verify(token, process.env.JWT_SECRET);
        //console.log("data: ",data.payload);
        const id = encr_data.payload.id;

        if(req.params.id!=id)
        {
            res.status(401).send("user must be logged in");  // 401 for unauthorized
        }
        
        data = await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        });

        res.status(200).send(data);  // 200 for success
    }

    catch(error){
        console.log("error is: ",error);
    }
};
//update user function ends.

//logout user function starts
exports.logoutUser = async function(req,res){

    try{
            res.cookie("token",null,{
                expires: new Date(Date.now()),
                httpOnly:true
            })
        
            res.status(200).send("logged out successfully");  //200 for success
    }
    catch(error){
        console.log("error is ",error);
    }
}