"use strict";
exports.__esModule = true;
//const app = express();
//const port = 4000
var App_1 = require("./App");
// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/api/courses',(req,res)=>{res.send([1,2,3])
// })
// PORT 
var port = (process.env.PORT || 3000);
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
App_1["default"].set("port", port);
App_1["default"].listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
// const  socketIO = require("socket.io");
// AppEndPoints.set("port", port);
// normalizePort () {
//     const port: number = typeof val === "string" ? parseInt (val,10) :val;
//     if (isNaN(port=)) return val;
//     else if (port >= 0 return) port; 
//     else return false;
// }
