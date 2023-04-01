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

    function doput(body_results){
        // check if body is a JSON string.
        if(isJsonString(body_results) == true)
        {  
            // we can replace previous JSON file without messing with the body.
            // check if File exists
            switch(fs.existsSync(`./data/${filename}.json`)){
                case true: 
                    // write to the file
                    fs.writeFileSync(`./data/${filename}.json`,json_string);
                    // build response with update complete status
                    res.writeHead(200,{'Content-Type':'application/json'});
                    res.writeHead(200,{'Current-timestamp':timestamp});
                    // do the update
                    // Write to a file
	                fs.writeFileSync(`./data/${filename}.json`,timestamp+'');
                    res.write(`Update to file: ${filename} complete.`);
                    break;
                case false:
                    // build response for 404 error here
                    res.writeHead(404,{'Content-Type':'application/json'});
                    res.writeHead(404,{'Current-timestamp':timestamp});
                    res.write(`File ${filename} not found, update unable to complete.`);
                break;
            }
        }
        else{
                // we must convert the string into a JSON string, double check that it is a valid JSON string, then replace previous JSON file.
                let json_string=JSON.stringify(body_results);
                // check if File exists
                switch(fs.existsSync(`./data/${filename}.json`)){
                     case true: 
                         // write to the file
                        fs.writeFileSync(`./data/${filename}.json`,json_string);
                        // build response with update complete status
                        res.writeHead(200,{'Content-Type':'application/json'});
                        res.writeHead(200,{'Current-timestamp':timestamp});
                        // do the update
                        // Write to a file
                        fs.writeFileSync(`./data/${filename}.json`,timestamp+'');
                        res.write(`Update to file: ${filename} complete.`);
                        break;
                    case false:
                        // build response for 404 error here
                        res.writeHead(404,{'Content-Type':'application/json'});
                        res.writeHead(404,{'Current-timestamp':timestamp});
                        res.write(`File ${filename} not found, update unable to complete.`);
                        break;
                }
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
}