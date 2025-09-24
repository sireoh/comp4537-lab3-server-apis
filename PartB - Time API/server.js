const http = require("http");
const url = require("url");
const { getDate, StringUtils } = require("./modules/utils");
const { ENG } = require("./lang/en/eng.js");

// Variables
const PORT = 12442;

// Simple HTTP server
http.createServer((req, res) => {
    // Get the query
    const query = url.parse(req.url, true).query;

    console.log(query);

    // Sending the response section
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end(`<span style="color:blue;">${StringUtils.format(ENG.GREETING, query["name"])} ${getDate()}</span>`);
}).listen(PORT);

// Server message
console.log(`${ENG.SERVER_RUNNING}${PORT}`);