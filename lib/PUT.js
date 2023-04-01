function put(req,res,putguts){
    // TODO: break down request here
    // Process the body of the request
	var body=req.body;
	req.on('data',(chunk)=>{
		body.push(chunk);
		console.log(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
		res.end(body);
       
        // a callback function
        doput(body);

	});
}

function doput(body_results){
    // used for writing to the file later.
    let json_string;
    switch(fs.existsSync(`./data/${filename}.json`)){
        case true: 
            // non asynchronous function at this point so can do this in order.
            if (isJsonString(body_results) == true)
            {
                // if it is jsonstring, no changes need to be made.
                json_string = body_results;
            }
            else{
                json_string=JSON.stringify(body_results);
            }
            
            // write to the file
            fs.writeFileSync(`./data/${filename}.json`,json_string);
            // build response with update complete status
            res.writeHead(200,{'Content-Type':'application/json'});
            res.writeHead(200,{'Current-timestamp':timestamp});
            // do the update
            // Write to a file
            fs.writeFileSync(`./data/${filename}.json`,timestamp+'');
            res.write(`Update to file: ${filename} complete. Wrote the following to file: \n\n ${json_string}`);
            break;
        case false:
            // build response for 404 error here
            res.writeHead(404,{'Content-Type':'application/json'});
            res.writeHead(404,{'Current-timestamp':timestamp});
            res.write(`File ${filename} not found, update unable to complete.`);
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