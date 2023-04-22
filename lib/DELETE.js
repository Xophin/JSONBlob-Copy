const fs=require('fs');
const url=require('url');

function DELETE(req,res){
    // Rough DELETE method
	let url_components=url.parse(req.url,true);
	const splitURL=url_components.pathname.split('/');

	let filename = splitURL[1];
	// console.log(my_new_file);
	// console.log(filename);
	// console.log(fs.existsSync(`./data/${filename}.json`));

    // checking that the file exists.
	switch(fs.existsSync(`./data/${filename}.json`)){
		case true: 
			console.log(`Attempting  removal of file: ${filename}`);
			fs.unlink(`./data/${filename}.json`,function(err){
                if (err) throw err;
            });
			res.writeHead(200,{'Content-Type':'application/text/html'});
			res.write(`Deletion of file ${filename} complete.`);
			console.log('delete complete');
			break;
		case false: 
			res.writeHead(404,{'Content-Type':'application/text/html'});
			res.write(`File ${filename} not found.`);
		break;
	}
}

module.exports=DELETE