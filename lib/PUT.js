const fs=require('fs');
const url=require('url');

function PUT(req,res){
    // Process the body of the request
	var body=[];
	req.on('data',(chunk)=>{
		body.push(chunk);
	}).on('end',()=>{
		body=Buffer.concat(body).toString();
        // a callback function
        doput(req,res,body);
		res.end(body);
	});
}

function doput(req,res,body_results){
    // parse out the filename here
    //Parse the components of the URL
    let url_components=url.parse(req.url,true);
	const splitURL=url_components.pathname.split('/');

	let filename = splitURL[1];
    let arrayName = splitURL[2];
    let targetIndex = splitURL[3];
    let javascript_object;

    // used for writing to the file later.
    let json_string;

    switch(fs.existsSync(`./data/${filename}.json`)){
        case true: 
            if (isJsonString(body_results) == true)
            {
                // if it is json string convert to JS object
                json_string = body_results;
                let javascript_object=JSON.parse(json_string);
            }
            else{
                // need to check if Javascript Object
                // json_string=JSON.stringify(body_results);
                javascript_object=json_string;
            }
            
            // Get the original data from the file
            // Splice new info into the original array.

            // convert back to JsonString

            // write to the file
            fs.writeFileSync(`./data/${filename}.json`,json_string);
            // build response with update complete status
            res.writeHead(200,{'Content-Type':'application/json'});
            // console.log("The update was successful.")
            res.write(json_string);
            break;
        case false:
            // build response for 404 error here
            res.writeHead(404,{'Content-Type':'application/text/html'});
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

module.exports=PUT