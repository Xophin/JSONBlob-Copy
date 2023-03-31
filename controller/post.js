const uuidv4 = require('../helpers');
const fs = require('fs');

const savePostBody = async function(req,res) {
    console.log("hello");
    res.writeHead(200, {
        'Content-Type':'application/json',
        
    });
    let uuid = uuidv4();
    console.log(uuid);
    res.writeHead(200, {
        'Content-Type':'application/json',
        'Location' : `localhost:8080/api/${uuid}`
    });
    let fileObject = {};
    let body = [];
	req.on('data', (chunk)=>{
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        fileObject[uuid] = body;
        console.log(fileObject);
        console.log(fs.readFileSync(`./data/file.json`,'utf8'));
        let dataFile = JSON.parse(fs.readFileSync(`./data/file.json`,'utf8'));
        dataFile= {...dataFile, ...fileObject};
        fs.writeFileSync('./data/file.json', JSON.stringify(dataFile));
        res.write(JSON.stringify(body));
        res.end();
	});
    
};
module.exports = {
    savePostBody
};