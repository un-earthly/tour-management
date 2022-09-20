const router = require("express").Router()
const controllers = require("../controllers/tours.controller")

router.get("/tours", controllers.allToursController);
router.get("/tour/cheapest", controllers.getCheapest);
router.get("/tour/trending", controllers.getTrending);
router.post("/tour", controllers.addTourController);



router
    .route("/tour/:id")
    .get(controllers.getATour)
    .patch(controllers.updateATour)
    .delete(controllers.deleteATour);





module.exports = router