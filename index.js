const http = require('http');
const url = require('node:url');
const fs = require('fs');

http.createServer((req, res) => {
    const myURL = url.parse(req.url);
    const filename = `.${myURL.pathname}.html`;
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            fs.readFile("./404.html", (err, data) => {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.write(data);
                return res.end();
            })
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);


// const readAndWrite = async () => {
//     const items = [];
//     const files = await fs.promises.readdir(__dirname);
//     files.forEach((file) => items.push(file));

//     fs.writeFile('items.txt', JSON.stringify(items), (err) => {
//         if (err) {
//             console.log(err);
//         }
//     })
// }

// readAndWrite();




