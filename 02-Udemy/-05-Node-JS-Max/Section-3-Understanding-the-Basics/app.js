const http = require("http");
const fs = require("fs");

// const http = require('http')

// function rqListener(req, res){

// }
// http.createServer(rqListener)

// http.createServer(function(req, res){

// })

// const server = http.createServer((req, res)=>{
//     console.log(req.url, req.method, req.headers);
//     // process.exit()
// })

// server.listen(3000)

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  const headers = req.headers;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = []
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk)
    })
    req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString()
        const message = parseBody.split('=')[1]
        console.log(parseBody);
        fs.writeFile("message.txt", message, (err)=>{
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end()
        });
    })
    
  }

  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Firest Page</title></head>");
  res.write("<body><h1>Hello Frome My Node.JS Server!</h1></body>");
  res.write("<html>");
  res.write("<html>");
  res.write("</html>");
  res.end();
});

server.listen(3001);
