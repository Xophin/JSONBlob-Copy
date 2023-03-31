const http = require('http');
const fs = require('fs');
const deleteReq = async function(req,res) {
          const filePath = './data/file.json';   
          
        if (!fs.existsSync(filePath)) {      
             res.statusCode = 404;     
               res.end('File not found');      
              return;   
              }       
                else {
                fs.unlinkSync(filePath);   

                res.statusCode = 200;   
                  res.end('File deleted successfully');  
              }

            server.listen(3000, () => {  
                console.log('Server started on port 3000');
        })
    };
