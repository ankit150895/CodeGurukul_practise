var express = require('express'); //Node_module for express server

var app = express(); // it is used to initialise express server 
app.set('views',__dirname+'/server/views');
console.log("THis is a varikeafds"+__dirname);
app.set('view engine','jade');
//app.use is used to use middlewares
app.use(express.static('public'));//static route handling
// Routes
app.get('/',function(req,res)
{
	res.render('index');
});
//req=request => HTTP request object
//res=response => HTTP response object
app.listen(3020); 
console.log("Express server is listening at port 3020");
