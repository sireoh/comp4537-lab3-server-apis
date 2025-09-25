class ENG {
  static SERVER_RUNNING =
    "The server is running at http://localhost:%s/COMP4537/lab/3/";
  static GREETING =
    "Hello %s, What a beautiful day. Server current date and time is";
  static NOT_FOUND = "404 - Not Found";
  static BASE_ROUTE_HTML_CONTENT = `<h2>API Routes</h2>
      <ul>
        <li>[GET] /COMP4537/lab/3/getDate?name=[your_name]</li>
        <li>[GET] /COMP4537/lab/3/writeFile?filename=[file_name]&content=[file_content]</li>
        <li>[GET] /COMP4537/lab/3/readFile?filename=[file_name]</li>
      </ul>`;
  static WRITE_SUCCESS_MESSAGE =
    "Successfully written content '%s' to /data/file.txt";
  static WRITE_FAIL_MESSAGE =
    "Error: text query parameter is missing. Add using /COMP4537/lab/3/writeFile?text=[content]";
  static GET_DATE_ERROR_MESSAGE =
    "Error: name query parameter is missing. Add using /COMP4537/lab/3/getDate?name=[your_name]";
  static FILE_EXISTS = "File already exists.";
  static READ_FILE_ERROR = "Error: Unable to read file. File may not exist.";
}

module.exports = ENG;
