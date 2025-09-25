const ENG = require("../lang/en/eng");
const Utils = require("./utils");

class RouteHandlers {
  static baseRoute(res) {
    res.end(ENG.BASE_ROUTE_HTML_CONTENT);
  }

  static getDate(res, query) {
    if (query["name"]) {
      res.end(
        `<span style="color:blue;">${Utils.String.format(
          ENG.GREETING,
          query["name"]
        )} ${Utils.getDate()}</span>`
      );
    } else {
      res.end(`<span style="color:red;">${ENG.GET_DATE_ERROR_MESSAGE}</span>`);
    }
  }

  static writeFile(res, query) {
    if (query["text"]) {
      Utils.writeFile(query["text"]);
      res.end(
        `<span style="color:blue;">${Utils.String.format(
          ENG.WRITE_SUCCESS_MESSAGE,
          query["text"]
        )}</span>`
      );
    } else {
      res.end(`<span style="color:red;">${ENG.WRITE_FAIL_MESSAGE}</span>`);
    }
  }

  // static readFile(res, query) {
  //   console.log("reading file ...");
  // }
}

module.exports = RouteHandlers;
