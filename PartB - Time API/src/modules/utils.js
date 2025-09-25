const url = require('url');

class Utils {
  static getDate() {
    return new Date();
  }

  static String = {
    format(template, ...args) {
      let i = 0;
      return template.replace(/%s/g, () => args[i++]);
    },
  };

  static Route = {
    getPathName(req) {
      return url.parse(req.url, true).pathname;
    },
  };
}

module.exports = Utils;