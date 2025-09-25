const ENG = require("../lang/en/eng");
const RouteHandlers = require("./routehandler");
const Utils = require("./utils");

class Router {
  static BASE_ROUTE = "/COMP4537/labs/3";

  // Part B - Get the Date
  static GET_DATE_ROUTE = `${Router.BASE_ROUTE}/getDate`;

  // Part C - File Operations
  static WRITE_FILE_ROUTE = `${Router.BASE_ROUTE}/writeFile`;
  static READ_FILE_ROUTE = `${Router.BASE_ROUTE}/readFile`;

  static run(res, pathname, query) {
    // Create the /data directory if it doesn't exist
    if (!Utils.dataDirExists()) {
      // If doesn't exist, make new /data directory
      Utils.mkDataDir();
    }

    switch (pathname) {
      case Router.BASE_ROUTE:
      case Router.BASE_ROUTE + "/":
        RouteHandlers.baseRoute(res);
        break;
      case Router.GET_DATE_ROUTE:
        RouteHandlers.getDate(res, query);
        break;
      case Router.WRITE_FILE_ROUTE:
        RouteHandlers.writeFile(res, query);
        break;
      default:
        if (pathname.includes(Router.READ_FILE_ROUTE)) {
          if (pathname.endsWith("file.txt")) {
            RouteHandlers.readFile(res, query);
            break;
          } else {
            res.end(
              `<span style="color:red;">${Utils.String.format(
                ENG.READ_FILE_NOT_FOUND,
                pathname.split("/readFile/")[1]
              )}</span>`
            );
            break;
          }
        } else {
          res.end(ENG.NOT_FOUND);
        }
    }
  }
}

module.exports = Router;
