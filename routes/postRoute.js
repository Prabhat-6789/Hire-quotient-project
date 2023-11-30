const express = require('express');
const { createPost, getpostDetails,addComment,deletePost} = require('../controller/postController');
const router = express.Router();

router.route("/post/new").post(createPost);
router.route("/post/postDetail/:id").get(getpostDetails);
router.route("/post/add-comment/:id").put(addComment);
router.route("/post/deletePost/:id").delete(deletePost);
module.exports = router;