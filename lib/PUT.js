function put(req,res){

    // break down request here

    // Check if a file exists
	let myfile='file.json';
	switch(fs.existsSync(`./data/${myfile}`)){
        case true: 
            // encode a javascript data type into JSON
            // write to the file
	        fs.writeFileSync(`./data/${myfile}`,timestamp+'');
            // build response with update complete status

            //Write something in the header of the response
	        res.writeHead(200,{'Content-Type':'application/json'});
	        res.writeHead(200,{'Current-timestamp':timestamp});
            res.write(`Update completed successfully to +${myFile}`);
            break;
        case false:
            // code for no file found here
            // build response for 404 error here
        break;
    }

    //Encode a javascript data type into JSON
	const javascript_object={
		artist:'Rednex',
		title:'Cotton Eye Joe',
		url_video:'https://youtu.be/HAlspX_kjL4'
	};
	let json_string=JSON.stringify(javascript_object);
	console.log(json_string);

    //Write something in the body of the response
	res.write('x');
	
	//Process the body of the request
	var body=[];
	req.on('data',(chunk)=>{
		body.push(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
		res.end(body);
	});

    // Write to a file
	let my_other_file=`${timestamp}.json`;
	fs.writeFileSync(`./data/${my_other_file}`,timestamp+'');

    //Write something in the header of the response
	res.writeHead(200,{'Content-Type':'application/json'});
	res.writeHead(200,{'Current-timestamp':timestamp});
}