import express = require('express');






class homePageController {

    public async home_page(req: express.Request, res: express.Response) {
        try {

            res.send("hello from homecontroller")
        }

        catch{
            console.log("failed")
        }




    }

};
///

export default new homePageController();



