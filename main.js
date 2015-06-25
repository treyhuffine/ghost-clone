var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    request = require("request"),
    exec = require("child_process").exec,
    Firebase = require('firebase'),
    marked = require("marked");
// http.createServer(responseHandler).listen(process.env.PORT);
http.createServer(responseHandler).listen(8888);

function responseHandler(req, resp) {
  if (req.url.match("fav")) {
    resp.end("");
    return;
  }

  // if (req.url === "/") {
  //   resp.writeHead(200, {"Content-Type": "text/html"});
  //   fs.readFile('index.html', 'utf8', function (err,data) {
  //     resp.end(data);
  //   });
  // }
  console.log(req.url.substring(0,10));
  if (req.url.substring(0,10) === "/markdown/") {
    resp.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('index.html', 'utf8', function (err,data) {
      resp.end(data);
    });
  }
  else {
    resp.end("Error. Use /markdown/text to translate a string");
  }
}
