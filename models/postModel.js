const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"please write title of the blog"]
    },

    description:{
        type:String,
        required:[true,"please write blog here"]
    },

    comments:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:"User"
            },
            name:{
                type:String
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],

    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    },

    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("Post",postSchema);