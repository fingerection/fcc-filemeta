var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

// At the top of your web.js
process.env.PWD = process.cwd()

app.get('/', function(req,res){
	res.sendFile(process.env.PWD + '/index.html');
});

app.post('/api/fileanalyse/', upload.single('0'), function(req, res){
	res.send({fileSize:req.file.size});
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Example app listening on port'+port);
});