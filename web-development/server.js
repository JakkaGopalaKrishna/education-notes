
const http = require('http');
console.log(http.STATUS_CODES[100]);
// create server
const server = http.createServer((req, res) => {
    console.log(Object.keys(req));
    console.log(Object.keys(res));

    res.write("hello world");
    res.write("hello", (error) => {
        if (error) {
            console.log("hello not printed", error);
        }
    });
    res.end();
});

// run server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})
/*
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    // 🔹 req.url & req.method
    console.log('URL:', req.url);
    console.log('Method:', req.method);

    // 🔹 Parse URL
    const parsedUrl = url.parse(req.url, true);

    // 🔹 req.query
    const query = parsedUrl.query;
    console.log('Query:', query);

    // 🔹 req.params (manual handling)
    const pathParts = parsedUrl.pathname.split('/');

    if (pathParts[1] === 'user' && pathParts[2]) {
        const userId = pathParts[2];
        console.log('Param ID:', userId);
    }

    // 🔹 req.body (manual)
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        if (body) {
            console.log('Body:', body);
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Check console');
    });

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

*/