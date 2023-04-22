const fs=require('fs');
const url=require('url');

function GET(req,res){
    // Rough GET method
	let url_components=url.parse(req.url,true);
	const splitURL=url_components.pathname.split('/');
	let fileContents;

	let fileName = splitURL[1];
	console.log("reading the line");
	console.log(splitURL[1]);
	/*
	testing for integrating with website
	let arrayName = splitURL[2];
	*/
	console.log(url_components.pathname);
	// console.log(my_new_file);
	// Read data from a file
	// console.log("NEW ATTEMPT 5TH");
	// console.log(fs.existsSync(`./data/${fileName}.json`));

    // checking that the file exists.
	switch(fs.existsSync(`./data/${splitURL[1]}.json`)){
		case true: 
			console.log(`Attempting read of file: ${fileName}`);
			// console.log(fs.readFileSync(`./data/${fileName}.json`,'utf8'));
			fileContents=fs.readFileSync(`./data/${splitURL[1]}.json`,'utf8');
			let json_string=JSON.parse(fileContents);

			// build the request
            res.writeHead(200,{'Content-Type':'application/json'});
            res.write(json_string);

			break;
		case false: 
		    res.writeHead(404,{'Content-Type':'application/text/html'});
            res.write(`File ${filename} not found, read unable to complete.`);

		break;
	}
}

module.exports=GET