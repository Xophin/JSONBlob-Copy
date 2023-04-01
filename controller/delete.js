const http = require('http');
const fs = require('fs');
const deleteReq = async function (req, res, id) {
  let filePath = JSON.parse(fs.readFileSync('./data/file.json'));
  
  if(!filePath.hasOwnProperty(id)) {
    res.writeHead(404, {
      'Content-Type':'application/json',
   });
   res.end(JSON.stringify({status:'failed', message: "id not found"}));
  }

  delete filePath[id];
  fs.writeFileSync('./data/file.json', JSON.stringify(filePath));
  res.writeHead(200, {
    'Content-Type':'application/json',
 });
  res.end(JSON.stringify({
    'status': 'success',
    'message': 'item delete successfully'
  }));
};

module.exports = deleteReq