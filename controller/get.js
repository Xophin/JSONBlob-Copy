const fs=require('fs');
const { json } = require('stream/consumers');
const uuidv4 = require('../helpers');

const getfunction = async function(req,res,id) {
	let file = fs.readFileSync('./data/file.json');
	let jsonFile = JSON.parse(file);
	let response = jsonFile[id];
	res.writeHead(200, {
        'Content-Type':'application/json',
        
    });
	res.write(JSON.stringify(response));
	res.end();
}
module.exports = {
    getfunction
};