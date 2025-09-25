const ENG = require('../lang/en/eng');
const RouteHandlers = require('./routehandler');

class Router {
  static BASE_ROUTE = "/COMP4537/lab/3";

  // Part B - Get the Date
  static GET_DATE_ROUTE = `${Router.BASE_ROUTE}/getDate`;

  // Part C - File Operations
  static WRITE_FILE_ROUTE = `${Router.BASE_ROUTE}/writeFile`;
  static READ_FILE_ROUTE = `${Router.BASE_ROUTE}/readFile`;

  static run(res, pathname, query) {
    switch (pathname) {
      case Router.GET_DATE_ROUTE:
        RouteHandlers.getDate(res, query);
        break;
      case Router.WRITE_FILE_ROUTE:
        RouteHandlers.writeFile(res, query);
        break;
      case Router.READ_FILE_ROUTE:
        RouteHandlers.readFile(res, query);
        break;
      default:
        res.end(ENG.NOT_FOUND);
    }
  }
}

module.exports = Router;