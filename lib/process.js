const fs=require('fs');
const url=require('url');
const GET=require('./GET.js');
const PUT=require('./PUT.js');

function process(req,res){
		// check that the body of the request is in JSON format
		let requestType;
		// call each function based on what the request method is.
		switch(requestType = requestMethodCheck(req.method)){
			case "GET":
				// call GET.js here
				console.log(requestType);
				GET(req,res);
				break;
			case "PUSH":
				// call PUSH.js here
				console.log(requestType);
				break;
			case "PUT":
				// call PUT.js here
				PUT(req,res);
				console.log(requestType);
				break;
			case "DELETE":
				// call DELETE.js here
				console.log(requestType);
				break;
			}
}

function doWork(req,res,body_results){
	// check that the body of the request is in JSON format
	let requestType;
	console.log(body_results);
		// call each function based on what the request method is.
		switch(requestType = requestMethodCheck(req.method)){
			case "GET":
				// call GET.js here
				console.log(requestType);
				GET(req,res);
				break;
			case "PUSH":
				// call PUSH.js here
				console.log(requestType);
				break;
			case "PUT":
				// call PUT.js here
				PUT(req,res);
				console.log(requestType);
				break;
			case "DELETE":
				// call DELETE.js here
				console.log(requestType);
				break;
		}
	/*
	// if false,  check exists then convert to JSONString format if does.
		// we must convert the string into a JSON string, double check that it is a valid JSON string, then replace previous JSON file.
		console.log(body_results);
		let json_string=JSON.stringify(body_results);
		switch(requestType = requestMethodCheck(req.method)){
			case "GET":
				// call GET.js here
				console.log(requestType);
				get(req,res);
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
			case "DELETE":
				// call DELETE.js here
				console.log(requestType);
				break;
		}
		*/
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


module.exports=process