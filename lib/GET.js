const fs=require('fs');
const url=require('url');

function GET(req,res){
    // Rough GET method
	let url_components=url.parse(req.url,true);
	const splitURL=url_components.pathname.split('/');
	let fileContents;

	let fileName = splitURL[1];
	let arrayName = splitURL[2];
	console.log(url_components.pathname);
	// console.log(my_new_file);
	// Read data from a file
	// console.log("NEW ATTEMPT 5TH");
	// console.log(fs.existsSync(`./data/${fileName}.json`));

    // checking that the file exists.
	switch(fs.existsSync(`./data/${fileName}.json`)){
		case true: 
			console.log(`Attempting read of file: ${fileName}`);
			// console.log(fs.readFileSync(`./data/${fileName}.json`,'utf8'));
			fileContents=fs.readFileSync(`./data/${fileName}.json`,'utf8');
			let javascript_object=JSON.parse(fileContents);
			console.log("testing with arrayName: ");
			console.log(javascript_object[arrayName][1]);
			break;
		case false: 
		    console.log("File Not Found"+fileName);
		break;
	}
}

module.exports=GET