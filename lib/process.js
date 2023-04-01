const fs=require('fs');
const url=require('url');

function process(req,res){
	//Obtain request method
	console.log("The request method:");
	// console.log(req.method);
	// console.log(requestMethodCheck(req.method));
	let requestType;
	switch(requestType = requestMethodCheck(req.method)){
		case "GET":
			console.log(requestType);
			console.log("Proof of case.");
			break;
		case "PUSH":
			console.log(requestType);
			break;
		case "PUT":
			console.log(requestType);
			break;
		case "DELTE":
			console.log(requestType);
			break;
	}
	//Parse the components of the URL
	// console.log("the req URL");
	// console.log(req.url);
	// let url_components=url.parse(req.url,true);
	// console.log("Url Components:");
	// console.log(url_components);
	// console.log("Url components after split: ");
	// console.log(url_components.pathname.split('/'));
	

	//Obtain the current timestamp (why do we need this?)
	const currentDate=new Date();
	const timestamp=currentDate.getTime();
	// console.log(timestamp);

	console.log("//---------=====---------\\");
	
	//Write something in the header of the response
	res.writeHead(200,{'Content-Type':'application/json'});
	res.writeHead(200,{'Current-timestamp':timestamp});
	
	//Write something in the body of the response
	res.write('x');
	
	//Gets the body of the request one chunk at a time then runs it all together.
	var body=[];
	req.on('data',(chunk)=>{
		body.push(chunk);
		console.log(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
		res.end(body);
		// asynchronous so requests for logging body must go in here.	
		// console.log("Logging the body from the request.");
		// console.log(body);
	});

	
	/*// Check if a file exists
	let myfile='file.json';
	// console.log(fs.existsSync(`./data/${myfile}`));
	
	// Write to a file
	// let my_other_file=`${timestamp}.json`;
	// fs.writeFileSync(`./data/${my_other_file}`,timestamp+'test');
	
	// Read data from a file
	// console.log(fs.readFileSync(`./data/${my_other_file}`,'utf8'));
	
	//Encode a javascript data type into JSON
	const javascript_object={
		artist:'Rednex',
		title:'Cotton Eye Joe',
		url_video:'https://youtu.be/HAlspX_kjL4'
	};
	let json_string=JSON.stringify(javascript_object);
	*/

	// Rough GET method
	let url_components=url.parse(req.url,true);
	const spliturl=url_components.pathname.split('/');

	let filename = spliturl[1];
	// console.log(my_new_file);
	// Read data from a file
	console.log(filename);
	console.log(fs.existsSync(`./data/${filename}.json`));
	switch(fs.existsSync(`./data/${filename}.json`)){
		case true: 
			console.log(`Attempting read of file: ${filename}`);
			console.log(fs.readFileSync(`./data/${filename}.json`,'utf8'));
			const json_string2 = fs.readFileSync(`./data/${filename}.json`,'utf8');
			
			//Convert a JSON string into javascript
			let javascript_object_again=JSON.parse(json_string2);
			console.log("A Javascript object:");
			console.log(javascript_object_again);
			break;
		case false: 
		console.log("File Not Found");
		break;
	}
}
function requestMethodCheck(method){
	let requestType = method;
	return requestType;
}

module.exports=process