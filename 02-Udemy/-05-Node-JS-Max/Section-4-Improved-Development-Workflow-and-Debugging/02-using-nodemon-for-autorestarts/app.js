const http = require('http');

const express = require('express')

const app = express()

app.use((req,res, next)=>{
    console.log('In The Middleware!');
})

const server = http.createServer(routes.handler);

server.listen(3000);
