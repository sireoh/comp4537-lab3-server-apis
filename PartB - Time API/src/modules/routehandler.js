const ENG = require("../lang/en/eng");
const Utils = require("./utils");

class RouteHandlers {
  static getDate(res, query) {
    res.end(
      `<span style="color:blue;">${Utils.String.format(
        ENG.GREETING,
        query["name"]
      )} ${Utils.getDate()}</span>`
    );
  }

  static writeFile(res, query) {
    console.log("writing file ...");
  }

  static readFile(res, query) {
    console.log("reading file ...");
  }
}

module.exports = RouteHandlers;
