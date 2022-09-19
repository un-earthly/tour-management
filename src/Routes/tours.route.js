const router = require("express").Router()
const controllers = require("../controllers/tours.controller")

router
    .route("/tours")
    .get(controllers.allToursController)
    .post(controllers.addTourController);



router
    .route("/tours/:id")
    .get(controllers.getATour)
    .patch(controllers.updateATour)
    .delete(controllers.deleteATour)


router
    .get("/tour/cheapest", controllers.getCheapest)
    .get("/tour/trending", controllers.getTrending)



module.exports = router