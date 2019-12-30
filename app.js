
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;


var cors = require('cors');
app.use(cors());

var allPosts = [];

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log('listening on port: ' + port));
app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json({type:'application/json'}))


// Post, user wants to upload a forum post
app.post('/api', (req,res)=>{

  console.log(req.body);
  allPosts.push(req.body);
  console.log(allPosts);
  res.end();
});

// Get, send over all forum posts 
app.get('/api', (req, res)=>{ 
  res.json(allPosts);
  res.end();
});


module.exports = app;
