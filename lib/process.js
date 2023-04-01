const fs=require('fs');
const url=require('url');

function process(req,res){
	// Check that req is in the JSON format.
	// procces the body of the request
	var body=req.body;
	req.on('data',(chunk)=>{
		body.push(chunk);
		console.log(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
		res.end(body);
        // a callback function
        doWork(req,res,body);
	});
}

// dumb function for the case because it needs an expression. :|
function requestMethodCheck(method){
	let result = method;
	return result;
}

// check if passed in  is a JSONString.
function isJsonString(str) {
	try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function doWork(req,res,body_results){
	// check that the body of the request is in JSON format
	let requestType;
	if(isJsonString(body_results) == true){
		// call each function based on what the request method is.
		switch(requestType = requestMethodCheck(req.method)){
			case "GET":
				// call GET.js here
				console.log(requestType);
				break;
			case "PUSH":
				// call PET.js here
				console.log(requestType);
				break;
			case "PUT":
				// call PUT.js here
				put(req,res);
				console.log(requestType);
				break;
			case "DELTE":
				// call DELTE.js here
				console.log(requestType);
				break;
		}
	}
	// if false,  check exists then convert to JSONString format if does.
	else {
		// we must convert the string into a JSON string, double check that it is a valid JSON string, then replace previous JSON file.
		let json_string=JSON.stringify(body_results);
	
		switch(requestType = requestMethodCheck(req.method)){
			case "GET":
				// call GET.js here
				console.log(requestType);
				break;
			case "PUSH":
				// call PET.js here
				console.log(requestType);
				break;
			case "PUT":
				// call PUT.js here
				put(req,res);
				console.log(requestType);
				break;
			case "DELTE":
				// call DELTE.js here
				console.log(requestType);
				break;
		}
	}
	// check that the response is in the JSON format.
}

module.exports=process