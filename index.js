const express = require('express');
//const { server } = require('http');
const path = require('path');

const server = express('server');

server.use(express.static(path.join(__dirname,'public')))




//app.get('/',serveHomePage);
//app.get('/about', serveAboutPage);
//app.get('/contact', serveContactPage);
//app.get('/service', serveServicePage);

server.listen(2000,()=> console.log('server has started'));