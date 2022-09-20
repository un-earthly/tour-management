const router = require("express").Router()
const controllers = require("../controllers/tours.controller")

router.get("/tours", controllers.allToursController);
router.post("/tour", controllers.addTourController);



router
    .route("/tour/:id")
    .get(controllers.getATour)
    .patch(controllers.updateATour)
    .delete(controllers.deleteATour)


router
    .get("/tour/cheapest", controllers.getCheapest)
    .get("/tour/trending", controllers.getTrending)



module.exports = router