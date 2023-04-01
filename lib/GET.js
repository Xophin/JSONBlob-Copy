const fs=require('fs');
const url=require('url');

function GET(req,res){
    // Rough GET method
	let url_components=url.parse(req.url,true);
	const spliturl=url_components.pathname.split('/');

	let filename = spliturl[1];
	// console.log(my_new_file);
	// Read data from a file
	console.log(filename);
	console.log(fs.existsSync(`./data/${filename}.json`));

    // checking that the file exists.
	switch(fs.existsSync(`./data/${filename}.json`)){
		case true: 
			console.log(`Attempting read of file: ${filename}`);
			console.log(fs.readFileSync(`./data/${filename}.json`,'utf8'));
			break;
		case false: 
		    console.log("File Not Found");
		break;
	}
}

module.exports=GET