const http=require('http');
const fileContent=require('fs');
const fileContent=fs.readFileSync("tut61.html");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text:html'});
    res.end(file.content)


})
server.listen(80,'127.0.0.1',()=>{
    console.log('listening on port 80');
})

