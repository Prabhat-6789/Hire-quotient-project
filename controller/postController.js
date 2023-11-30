const Post = require('../models/postModel');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//CREATING NEW POST
exports.createPost = async function(req,res){

    try{
        const token = req.cookies.token;
        if(!token)
        res.status(403).send("user must be logged in before");  //403 for forbidden request

        const encr_data = await jwt.verify(token, process.env.JWT_SECRET);
        //console.log("data: ",data.payload);
        const id = encr_data.payload.id;
        req.body.user = id;
        
        const post = await Post.create(req.body);

        res.status(201).send(post);  //201 for successfully creation
    }

    catch(error){

        console.log("error is ",error);
    }

}

// GET POST DETAILS
exports.getpostDetails = async (req,res) => {

    try{

        const post = await Post.findById(req.params.id);
        if(!post)
        res.status(404).send("post not found");  //404 for not found

        else
        res.status(200).send(post);  //200 for success
    }

    catch(err)
    {
        console.log("error is",error);
    }

};

//adding comments
exports.addComment = async(req,res) => {

    try{
        const token = req.cookies.token;
        if(!token)
        res.status(403).send("user must be logged in");  // 403 for forbidden

        const decr_data = await jwt.verify(token, process.env.JWT_SECRET);
        const user = decr_data.payload;
        //console.log("user:",user);
        //req.user = user;
        const getUser = await User.findById(user.id);
        const name = getUser.name;
        const {comment} = req.body;

        const post = await Post.findById(req.params.id);
        if(!post)
        res.status(404).send("post not found");  //404 data not found

        post.comments.push({
            user: user.id, // Assuming req.user.id is the ID of the user making the comment
            name: name, // Replace with the actual property of the user containing their name
            comment,
          });

          // Save the updated post
          await post.save();
          res.status(200).send("comment added successfully");
    }

    catch(error){
        console.log("error is: ",error);
    }
}

//DELETE POST
exports.deletePost = async (req,res) => {

    try{
        const post = await Post.findById(req.params.id);

        if(!post)
        {
            res.status(404).send("post not found");  //data not found
        }
        
        const token = req.cookies.token;
        const decr_data = await jwt.verify(token, process.env.JWT_SECRET);
        const user = decr_data.payload;
        const Id = user.id;
            console.log("user:",user);
        if(post.user != Id)
        {
            res.status(401).send("you can't delete this post");  //401 for unauthorized
        }
        
        else{
            await post.deleteOne();
            res.status(200).send("post deleted successfully");  //200 for success
        }
    }

    catch(error){
        console.log("error is: ",error);
    }
};

