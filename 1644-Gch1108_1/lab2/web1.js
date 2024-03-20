const host = "localhost" // declare host server

const port=3000; //default of node

//declare http module(library)
const http=require('http')

//create web sever
const server= http.createServer((request,response) => {
  //display content to web page
  response.write("<h>Helo world</h>");
  response.write("<h>DCM</h>")
  response.end();
});

//run web server
server.listen((port), ()=> {
    console.log("http://localhost:"+port);
});
