// module generates a unique identifier for each new post.
const uuidv4 = require('../helpers');
//module used to read and write files.
const fs = require('fs');

//asynchronous function that takes two parameters req and res; a callback function for a POST request to create a new blog post.
const savePostBody = async function(req,res) {
    //console.log("hello");
    //set the response status code to 200 and the response headers to specify that the response is in JSON format.
    res.writeHead(200, {
        'Content-Type':'application/json',
        
    });
    //UUID is generated using the uuidv4 module and logged to the console.
    let uuid = uuidv4();
    console.log(uuid);
    //The response headers are updated to include the URL where the newly created post can be accessed.
    res.writeHead(200, {
        'Content-Type':'application/json',
        'Location' : `localhost:8080/api/${uuid}`
    });
    //let fileObject = {};
    let body = [];
    //The function then listens for the request data and appends it to a buffer called body until the request is complete.
	req.on('data', (chunk)=>{
		body.push(chunk);
        //Once the request is complete, the body buffer is concatenated and parsed as JSON.
	}).on('end', () => {
		body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        fs.writeFile(`${uuid}.json`,JSON.stringify(body));

        //A new object fileObject is created with the UUID as the key and the parsed JSON as the value.
        //fileObject[uuid] = body;
        //console.log(fileObject);
        console.log(fs.writeFileSync(`./data/${uuid}.json`,'utf8'));
        //The contents of the file ./data/file.json are read and parsed as JSON.
        //let dataFile = JSON.parse(fs.readFileSync(`./data/file.json`,'utf8'));
        //The new fileObject is merged with the existing data from file.json using the spread operator
        //dataFile= {...dataFile, ...fileObject};
        //the result is written as a file.
        //fs.writeFileSync(`./data/${uuid}.json`, JSON.stringify(dataFile));

        //The function sends the JSON representation of the parsed body back as the response.
        res.write(JSON.stringify(body));
        //The function then ends the response using the res.end() method.
        res.end();
	});
    
};
//Finally, the function is exported as an object with the savePostBody method as a property.
module.exports = {
    savePostBody
};