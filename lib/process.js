const fs=require('fs');
const url=require('url');
const GET=require('./GET.js');
const PUT=require('./PUT.js');
const DELETE=require('./DELETE.js');

function process(req,res){
		// check that the body of the request is in JSON format
		let requestType;
		// call each function based on what the request method is.
		switch(requestType = requestMethodCheck(req.method)){
			case "GET":
				// call GET.js here
				//console.log(requestType);
				GET(req,res);
				break;
			case "PUSH":
				// call PUSH.js here
				console.log(requestType);
				break;
			case "PUT":
				// call PUT.js here
				//console.log(requestType);
				PUT(req,res);
				break;
			case "DELETE":
				// call DELETE.js here
				// console.log(requestType);
				DELETE(req,res);
				break;
			}
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