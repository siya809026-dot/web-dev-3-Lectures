const http = require("http");

const server =  http.createServer((req,res)=>{
   // console.log(req.url);
   // console.log(req.headers);

if(req.url=="/"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to server<h1>");
    res.end();
}else if(req.url=="/about"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to about page<h1>");
    res.end();
}else if(req.url=="/contact"&& req.method=="GET"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to contactpage<h1>");
    res.end();
}else{
    res.writeHead(200,{"Content-type":"text/html"});
    res.write("<h1>404 page notfound<h1>");
    res.write("page not found");
}   
res.end()     
})
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});