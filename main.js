var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    request = require("request"),
    exec = require("child_process").exec,
    Firebase = require('firebase'),
    marked = require("marked");
// http.createServer(responseHandler).listen(process.env.PORT);
http.createServer(responseHandler).listen(8888);
console.log(marked('I am using __markdown__.'));
function responseHandler(req, resp) {
  if (req.url.match("fav")) {
    resp.end("");
    return;
  }

  resp.writeHead(200, {"Content-Type": "text/html"});
  if (req.url.substring(0,10) === "/markdown/") {
    resp.end(marked(decodeURI(req.url.slice(10))));
  }
  else if (req.url === "/"){
    fs.readFile('index.html', 'utf8', function (err,data) {
      resp.end(data);
    });
  }
  else {
    resp.end("Error. Use /markdown/text to translate a string");
  }
}
