var http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Hello World");
    }

    if(req.url === "/api/fake") {
        const users = [
            {
                id: 1,
                name: "john"
            },
            {
                id: 2,
                name: "doe"
            }
        ];

        res.write(JSON.stringify(users));
    }

    res.end();
});

server.listen(3000);

console.log("Listening on port 3000...");
