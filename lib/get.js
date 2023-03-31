const fs=require('fs');
const url=require('url');

async function get(url = "", data = {}) {
	const response = await fetch("http://localhost:8080",{

		method:'GET',
		headers: {
			"Content-Type": "application/json",
		},
		body: {}, // body data type must match "Content-Type" header
	});

	return response;
}

//read file
function read(myfileTEST){
		//get doc id from url
		//Parse the components of the URL
		let url_components=url.parse(req.url,true);
		console.log(url_components);
		console.log(url_components.pathname.split('/'));
//check if exists
		// Check if a file exists
		let myfileTEST='newFile.json';
		console.log(fs.existsSync(`./data/${myfileTEST}`));
//return file as a javascript object from json file
		//Convert a JSON string into javascript
		let javascript_object_again=JSON.parse(json_string);
		console.log(javascript_object_again);
	
};




/*
	//get doc id from url
		//Parse the components of the URL
		let url_components=url.parse(req.url,true);
		console.log(url_components);
		console.log(url_components.pathname.split('/'));
	//check if exists
		// Check if a file exists
		let myfileTEST='newFile.json';
		console.log(fs.existsSync(`./data/${myfileTEST}`));
	//return file as a javascript object from json
		//Convert a JSON string into javascript
		let javascript_object_again=JSON.parse(json_string);
		console.log(javascript_object_again);
*/


/*
	// Check if a file exists
	let myfileTEST='newFile.json';
	console.log(fs.existsSync(`./data/${myfileTEST}`));

    //Obtain the current timestamp
	const currentDate=new Date();
	const timestamp=currentDate.getTime();
	console.log(timestamp);
	
	//Write something in the header of the response
	res.writeHead(200,{'Content-Type':'application/json'});
	res.writeHead(200,{'Current-timestamp':timestamp});

    // Read data from a file
	console.log(fs.readFileSync(`./data/${myfileTEST}`,'utf8'));
    let content = fs.readFileSync(`./data/${myfileTEST}`);
    console.log(content);
    
    let json_string=JSON.stringify(content);
    res.write(content);
	//return content;

	*/