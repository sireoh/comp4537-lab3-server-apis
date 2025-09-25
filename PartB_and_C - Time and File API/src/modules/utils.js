const url = require("url");
const fs = require("fs");
const path = require("path");
const ENG = require("../lang/en/eng");

class Utils {
  constructor() {
    this.DATA_DIR_PATH = "./data";
    this.FILENAM_E = "content.txt";
    this.FILEPATH = path.join(this.DATA_DIR_PATH, this.FILE_NAME);
  }

  static getDate() {
    return new Date();
  }

  static writeFile(content) {
    if (!Utils.checkDataDirExists()) {
      fs.writeFile(this.FILEPATH, content, (err) => {
        if (err) {
          console.error(ENG.WRITE_FAIL_MESSAGE, err);
        } else {
          console.log(Utils.String.format(ENG.WRITE_SUCCESS_MESSAGE, content));
        }
      });
    } else {
      console.log(ENG.FILE_EXISTS);
    }
  }

  static readFile() {
    return fs.readFileSync(this.FILEPATH, "utf8");
  }

  static checkDataDirExists() {
    if (!fs.existsSync(this.DATA_DIR_PATH)) {
      fs.mkdirSync(this.DATA_DIR_PATH, { recursive: true });
    }
    return fs.existsSync(this.FILEPATH);
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
