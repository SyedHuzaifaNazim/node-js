const { Console } = require('console')
const http = require('node:http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=> {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader  ('Content-Type', 'text/html')
    res.end  ('<h1>This is Developer_154..!!</h1> <p>Lets rock the World..!!!!</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`);

});