const express = require('express');// *  as express from "express";
const app = express();
const port = 3000


// import App from './App';
// import * as serviceWorker from './serviceWorker';




app.get('/', (req: object, res: any) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))