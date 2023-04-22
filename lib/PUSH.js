const fs=require('fs');
const url=require('url');

function PUSH(req,res){
    // Rough PUSH method
	// Not splitting URL because we don't need to.
    // Process the body of the request
	var body=[];
	req.on('data',(chunk)=>{
		body.push(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
        // a callback function
        dopush(req,res,body);
		res.end(body);
	});
}
function dopush(req,res,body_results){
    // generating timestamp.
    const currentDate=new Date();
	const timestamp=currentDate.getTime();
	// console.log(timestamp);
	
	// TODO: generate random unique filename
	let filename = timestamp;
	// console.log(filename);

    if (isJsonString(body_results) == true)
        {
            // if it is json string convert to JS object
            json_string = body_results;
            let javascript_object=JSON.parse(json_string);
        }
        else{
            // need to check if Javascript Object
            json_string=JSON.stringify(body_results);
        }
        // write to the file
        fs.writeFileSync(`./data/${filename}.json`,json_string);

        // check if file was created
        switch(fs.existsSync(`./data/${filename}.json`)){
            case true:
                // write to the file
                // build response with update complete status
                res.writeHead(200,{'Content-Type':'application/text/html'});
                res.write(`Creation of file ${filename} complete.`);
                break;
            case false:
                // build response for 404 error here
                res.writeHead(404,{'Content-Type':'application/text/html'});
                res.write(`File ${filename} not found, file creation failed.`);
            break;
        }
}

// check if passed in string is a JSONString.
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports=PUSH