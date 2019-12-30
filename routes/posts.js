var express = require('express');
var router = express.Router();

// Collection of all posts
var posts = {posts : []} 

// Get blog posts with comments
router.get('/', function(req, res, next) { 
    res.json([
        {name: "The beginning", 
         body: "This is the first blog post, none came before this one...",
         author: "Alexander Chisholm"},

         {name: "The beginning", 
         body: "This is the first qwdQ3Dq3fdQ3Fw3fblog post, none came before this one...",
         author: "Alexander Chisholm"},

         {name: "The beginning", 
         body: "This is the first qwdQ3Dq3fdQ3Fw3fblog post, none came before this one...",
         author: "Alexander Chisholm"}
    ]);
  });

module.exports = router;
