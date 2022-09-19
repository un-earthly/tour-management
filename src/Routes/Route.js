const router = require("express").Router()


router
    .route("/tours")
    .get(async (req, res, next) => {
        res.send({ msg: "hello im tours route" })
    })
    .post(async (req, res, next) => {
        res.send({ msg: "this is post route" })
    });



router
    .route("/tours/:id")
    .get(async (req, res, next) => {
        res.send({ msg: `this is get route ${req.params.id}` })
    })
    .patch(async (req, res, next) => {
        res.send({ msg: `this is patch route ${req.params.id}` })
    })
    .delete(async (req, res, next) => {
        res.send({ msg: `this is delete route ${req.params.id}` })
    })


router.get("/tour/cheapest", async (req, res, next) => {
    res.send({ msg: "this is cheapest route" })
}).get("/tour/trending", async (req, res, next) => {
    res.send({ msg: "this is trending route" })
});


module.exports = router