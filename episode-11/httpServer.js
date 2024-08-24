// nodeJs http module gives us access
//to a function createServer
// which allows us to create a server
// once I create a server
// now I can listen Incomming request

const http=require('http');
const server=http.createServer(function (req,res){
if(req.url==='/secretData')
{
    res.end("ha ha there is no secret data we fooled yoy");
}

    res.end("Hello World! I am giving this message to all clients hitting my server");
});


server.listen(7777);

//we can host this sever to aws machine 
//and people get ip of the machine
//and can hit and get response back