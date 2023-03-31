const http = require('http');
const post = require('./controller/post');
const server = http.createServer().listen(8080);
//const process=require('./lib/process.js');
const url = require('url');
const fs = require('fs');

server.on('request',async(req,res)=>{
	let myfile='file.json';
	if(!fs.existsSync(`./data/${myfile}`)) {
		fs.writeFileSync('./data/file.json','');
	}

	console.log(req.method);
	//Parse the components of the URL
	let url_components= url.parse(req.url,true);
	console.log(url_components);
	console.log(url_components.pathname.split('/'));
	let path = url_components.pathname.split('/');
	let stringPath = path[1];
	if(req.method === "POST" && url_components.pathname === '/api') {
		await post.savePostBody(req, res);
	}
	if(req.method === "DELETE" && stringPath === "api" ){
		const delete = require('./controller/delete');
		delete.getfunction(req,res,path[2]);
	}
	else {   
		  res.statusCode = 404;   
		  res.end('Page not found');  
	}
});
