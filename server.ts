
//const app = express();
//const port = 4000
import App from "./App";



// app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/api/courses',(req,res)=>{res.send([1,2,3])

// })





// PORT 
const port = (process.env.PORT || 3000);
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));

App.set("port", port)

App.listen(port, () => console.log(`Example app listening on port ${port}!`));



// const  socketIO = require("socket.io");


// AppEndPoints.set("port", port);



// normalizePort () {
//     const port: number = typeof val === "string" ? parseInt (val,10) :val;
//     if (isNaN(port=)) return val;
//     else if (port >= 0 return) port; 
//     else return false;
// }