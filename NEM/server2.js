const http=require('http');
const fs=require('fs')

const homepage=fs.readFileSync("./pages/homepage.html");
const aboutpage=fs.readFileSync("./pages/about.html");
const server=http.createServer((req, res)=>{
    console.log("request: "+req.url);
    if(res.url==="/homepage"){
        res.end(homepage);
    }

    else if(req.url==="/"){
        res.end(aboutpage);

    }
    else{
        res.writeHead(404);
        res.end("Page not found");
    }
});
server.listen(3000);