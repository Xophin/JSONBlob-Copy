const http = require('http');
const post = require('./controller/post');
//sets up a server using Node.js's built-in http module and listens on port 8080
const server = http.createServer(function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
}).listen(8000);
//const process=require('./lib/process.js');
const url = require('url');
const fs = require('fs');

//When a request is made to the server, the server.on method is called with a callback function that handles the incoming request.
server.on('request', async(req,res)=>{

//The code first logs the request method (e.g. "GET", "POST", "DELETE", etc.) to the console.
	console.log(req.method);
	//parses the URL of the incoming request using Node.js's built-in url module
	let url_components= url.parse(req.url,true);
	console.log(url_components);
	console.log(url_components.pathname.split('/'));
	//splits the resulting pathname into an array called path
	let path = url_components.pathname.split('/');
	let stringPath = path[1];
	console.log(stringPath)
	//If the request method is POST and the pathname is /api
	if(req.method === "POST" && url_components.pathname === '/api') {
		console.log('post');
		//calls a function savePostBody from a module called post and passes it the request and response objects.
		await post.savePostBody(req, res);
	}
	//If the request method is GET and the first path component is api
	if(req.method === "GET" && stringPath === "api" ){
		//calls a function getfunction from a module called get
		const get = require('./controller/get');
		//passes it the request, response, and the second path component as a uuid
		get.getfunction(req,res,path[2]);
	}
	//If the request method is DELETE and the first path component is api
	if(req.method === "DELETE" && stringPath === "api" ){
		//calls a function deleteFile from a module called delete
		const deleteFile = require('./controller/delete');
		//passes it the request, response, and the second path component as a uuid
		await deleteFile(req,res, path[2]);
		console.log(path[2]);
		res.writeHead(200, {
			'Content-Type':'text/plain',
		});
		res.write(`${path[2]}`);
		res.end();
	}
	//If the request method is PUT and the first path component is api
	if(req.method === "PUT" && stringPath === "api"){
		//calls a function putData from a module called put
		const putData = require('./controller/put');
		//passes it the request, response, and the second path component as a uuid
		//By using await, the server will wait for the putData function to finish executing before moving on to the next line of code. This ensures that the response is only sent back to the client once the putData function has completed its work.
		await putData(req,res,path[2]);
	}
});


