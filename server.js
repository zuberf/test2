var express = require("express"); // Include express.js module
var app = express();

var path = require("path"); // include moduel path to use dirname, and function path.join()

var HTTP_PORT = process.env.PORT || 8080;  //  : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}
var data_server = require('./test2_ModuleA.js');

// setup a 'route' to listen on the default url path (http://localhost/)
app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/home.html"));
});


app.get('/BSD', function (req, res) {
    data_server.getBSD().then((data) => {res.json(data);})
      .catch((err) => {res.json({ message: err });
      });
    });
    app.get('/gpa', function (req, res) {
    data_server.getGPA().then((data) => {
        res.json(data);})
      .catch((err) => {res.json({ message: err });
          });
      });
      app.get('*', function (req, res) {
        res.send('Uh Oh! Error 404: File Not Found');
      });

      //setup http server to listen on HTTP_PORT
      data_server.initialize().then(() => {
          app.listen(HTTP_PORT, onHttpStart);
        })
        .catch(function (err) {console.log(err);});
        
    
