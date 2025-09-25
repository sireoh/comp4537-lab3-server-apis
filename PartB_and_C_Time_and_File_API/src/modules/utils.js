const url = require("url");
const fs = require("fs");
const path = require("path");
const ENG = require("../lang/en/eng");

class Utils {
  static DATA_DIR_PATH = "./data";
  static FILE_NAME = "file.txt";
  static FILE_PATH = path.join(Utils.DATA_DIR_PATH, Utils.FILE_NAME);

  static getDate() {
    return new Date();
  }

  static writeFile(content) {
    // Ensure directory exists
    if (!Utils.dataDirExists()) {
      // If doesn't exist, make new /data directory
      Utils.mkDataDir();
    } else {
      // Append to the file
      fs.appendFile(Utils.FILE_PATH, content + "\r\n", (err) => {
        if (err) {
          console.error(ENG.WRITE_FAIL_MESSAGE, err);
        } else {
          console.log(Utils.String.format(ENG.WRITE_SUCCESS_MESSAGE, content));
        }
      });
    }
  }

  static readFile() {
    // Ensure directory exists
    if (!Utils.dataDirExists()) {
      // If doesn't exist, make new /data directory
      return { message: ENG.READ_FILE_ERROR, success: false };
    } else {
      // Read file successfully
      return {
        message: fs
          .readFileSync(Utils.FILE_PATH, "utf8")
          .replace(/\r?\n/g, "<br>"),
        success: true,
      };
    }
  }

  static dataDirExists() {
    return fs.existsSync(Utils.DATA_DIR_PATH);
  }

  static mkDataDir() {
    fs.mkdirSync(Utils.DATA_DIR_PATH, { recursive: true });
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
