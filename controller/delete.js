const http = require('http');
const fs = require('fs');
//This code defines a function named deleteReq which is exported for use in other modules. The function takes three parameters: req, res, and uuid.
//The req and res parameters represent the HTTP request and response objects respectively, while the uuid parameter represents the unique identifier of the post to be deleted.
const deleteReq = async function (req, res, uuid) {
  //The function begins by reading the contents of the file with the specified UUID 
  let filePath = JSON.parse(fs.readFileSync(`./data/${uuid}.json`));
  
  //check if the filePath variable is null. 
  if(filePath = null) {
    //If it is null, the function returns a 404 error with a JSON response indicating that the post with the specified UUID was not found.
    res.writeHead(404, {
      'Content-Type':'application/json',
   });
   res.end(JSON.stringify({status:'failed', message: "id not found"}));
  }
//If the filePath variable is not null, the delete keyword is used to remove the file with the specified UUID from the file system
  fs.unlink(`./data/${uuid}.json`,(err) => {
    if (err) throw err;
    console.log( 'file was deleted');
  });
  //fs.writeFileSync('./data/file.json', JSON.stringify(filePath));
  //The function then returns a 200 response with a JSON message indicating that the post was deleted successfully.
  res.writeHead(200, {
    'Content-Type':'application/json',
 });
  res.end(JSON.stringify({
    'status': 'success',
    'message': 'item delete successfully'
  }));
};
//Finally, the function is exported for use in other modules.
module.exports = deleteReq