function put(req,res){
    // TODO: break down request here
    // Process the body of the request
	var body=req.body;
	req.on('data',(chunk)=>{
		body.push(chunk);
		console.log(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
		res.end(body);

        // Chopping up the body
        // url_components
        let url_components=url.parse(req.url,true);
        console.log(url_components);
	    console.log(url_components.pathname.split('/'));

        // pull out filename and new info to be written to the file as seperate attributes
		// TODO: do the file name
        // let documentID=
        const javascript_object = {}; 

        // Check if a file exists
        switch(fs.existsSync(`./data/${documentID}`)){
            case true: 
                // encode a javascript data type into JSON
                // TODO: javascript_object should be from the body of the request.
                let json_string=JSON.stringify(javascript_object);

                // write to the file
                fs.writeFileSync(`./data/${documentID}`,timestamp+' '+json_string);
                // build response with update complete status
                // TODO: figure out how to write to part of response instead of to page
                res.writeHead(200,{'Content-Type':'application/json'});
                res.writeHead(200,{'Current-timestamp':timestamp});
                res.write(`Update completed successfully to +${documentID}`);
                break;
            case false:
                // code for no file found here
                // build response for 404 error here
                res.writeHead(404,{'Content-Type':'application/json'});
                res.writeHead(404,{'Current-timestamp':timestamp});
            break;
        }

	});

    
    
}