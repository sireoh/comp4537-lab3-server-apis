// modules/utils.js

function getDate() {
  return new Date();
}

class StringUtils {
  static format(template, ...args) {
    let i = 0;
    return template.replace(/%s/g, () => args[i++]);
  }
}

module.exports = {
  getDate,
  StringUtils
};
