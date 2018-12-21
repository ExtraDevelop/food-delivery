import * as express from "express";
import * as bodyPaser from "body-parser";
import * as path from "path"
import * as HomePageRoute from "./Middleware/routes/HomePageRoute";



class App {

    public express: express.Application;


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.static(__dirname));
        this.express.use(bodyPaser.json({ limit: "5mB}))" }));
    }


    private routes(): void {

        this.express.use('/home', HomePageRoute);
        this.express.use("/api");
        this.express.use('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, "index.html"))
        })



    }



}
export default new App().express;