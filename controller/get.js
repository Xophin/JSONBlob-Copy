const fs=require('fs');
const { json } = require('stream/consumers');
const uuidv4 = require('../helpers');

//asynchronous function that takes three parameters: req, res, and uuid. GET request to retrieve a specific JSON page based on its UUID.
const getfunction = async function(req,res,uuid,id) {
	//The function reads the contents of the file
	let file = fs.readFileSync(`./data/${uuid}.json`);
	//The contents of the file ${uuid}.json are parsed as JSON and stored in the jsonFile variable.
	let jsonFile = JSON.parse(file);
	//The function retrieves the data with the specified ID from jsonFile and stores it in the response variable.
	let response = jsonFile[id];
	//The res.writeHead method is used to set the response status code to 200 and the response headers to specify that the response is in JSON format.
	res.writeHead(200, {
        'Content-Type':'application/json',
        
    });
	//The JSON.stringify method is used to convert the response object to a JSON string, which is then sent as the response body using the res.write method.
	res.write(JSON.stringify(response));
	//Finally, the function ends the response using the res.end() method.
	res.end();
}
//The function is exported as an object with the getfunction method as a property.
module.exports = {
    getfunction
};