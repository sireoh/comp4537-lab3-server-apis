const http = require("http");
const url = require("url");
const Router = require("./router");
const Utils = require("./utils");
const ENG = require("../lang/en/eng");

class Main {
  static run() {
    // Variables
    const PORT = 12442;

    // Simple HTTP server
    http
      .createServer((req, res) => {
        // Get the query
        const query = url.parse(req.url, true).query;

        // Set the header
        res.writeHead(200, { "Content-Type": "text/html" });

        // Start the routes
        Router.run(res, Utils.Route.getPathName(req), query);
      })
      .listen(PORT);

    // Server message
    console.log(`${Utils.String.format(ENG.SERVER_RUNNING, PORT)}`);
  }
}

module.exports = Main;
