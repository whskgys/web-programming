const http=require('http');
const server=http.createServer((req, res)=>{
    console.log("request: "+req.url);
    if(res.url=="/"){
        res.end("home page");
    }
    else if(req.url === "/contact"){
        res.end("contact page");
    }
    else if(req.url==="/about"){
        res.end("about page");

    }else{
        res.writeHead(404);
        res.end("Page not found");
    }
});
server.listen(3000);