//1. khai bao host
const host = 'localhost'

//2. khai bao port
const port = 3000 //3000: la port mac dinh cua NodeJS

//3. khai bao http
const http = require('http')

//4. tao web server
const server = http.createServer((request, respond) => {
    //hien thi noi dung trong trang web
    respond.setHeader('Content-type', 'text/html')
    respond.write('<h1>Hello world</h1>')
    respond.write('<h2>This is my first NodeJs page</h2>')
    respond.write('<h3>GreenWich VN</h3>')
    respond.end
})
//5. chay server web
server.listen(port, () =>{
    console.log("Web server is running at http://" + host + ":" + port)
})