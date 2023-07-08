const { write } = require('fs');
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  if(url === '/'){
    res.setHeader('content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Assignment 1</title></head>')
    res.write(
      '<body> <form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>')
    return res.end()
  }
  if(url === '/users'){
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write('<body>')
    res.write("<ul> <li>User1</li><li>User2</li><li>User3</li></ul>");
    res.write('</body>')
    res.write("</html>");
    return res.end();
  }

  if(url === '/create-user'){
    const body = []

    res.on('data', (chunk)=>{
        body.push(chunk)
    })
    res.on('end',()=>{
        const parsBody = Buffer.concat().toString()
        console.log(parsBody.split('=')[1]);
    })
    res.statusCode = 302
    res.setHeader('location','/')
    res.end()
  }
});



server.listen(3000)