const fs = require('fs');
const {Console} = require('console');
const http = require('http')

const port = process.env.PORT || 1753;

const server = http.createServer((req, res)=> {
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end  (data.toString());
    }
    else if (req.url == '/D'){
        res.statusCode = 200;
        res.end ('<h1>This is Developer_154..!!</h1>;<p>Lets rock the World..!!!!</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end  ('<h1>About Us</h1><p>This is about us</h1>')
    }
    else{
        res.statusCode = 404;
        res.end  ('<h1>404 Error</h1><p>Page Not Found</p>')
    }
});

server.listen (port, ()=>{
    console.log(`Server is listening to port ${port}`);
});