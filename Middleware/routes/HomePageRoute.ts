import express = require("express");
const router = express.Router();
import homePageController from '../controller/homePageController';


router.get('/courses', homePageController.home_page);


// define the home page route
// router.get('/', function (req: express.Request, res: express.Response) {
//     res.send('Birds home page')
// })


export = router;





// app.get('/', (req, res) => res.send('Hello World!'));

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })