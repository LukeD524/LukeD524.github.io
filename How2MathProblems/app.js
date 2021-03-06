var url=require('url');
var express=require('express');
var app=express();
var prefix='/p/';
app.use(function(req,res,next){res.header("Access-Control-Allow-Origin","*");res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");next();});
app.use(require('unblocker')({prefix:prefix,responseMiddleware:[]}));
app.use('/',express.static(__dirname+'/public'));
app.get("/-",function(req,res){res.redirect(prefix+url.parse(req.url,true).query.url);});
app.use(function(req,res,next){res.status(404);res.type('html').send('<meta http-equiv="refresh" content="0;url='+url.resolve(req.url,'/')+'">');});
module.exports=app;