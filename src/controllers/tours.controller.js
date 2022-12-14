const Tour = require("../models/Tour.model")
const controllers = {
    allToursController: async (req, res,) => {
        const limit = parseInt(req.query.limit) || 10
        const page = parseInt(req.query.page) || 0
        const sort = !req.query.sort ? req.query.sort : req.query.sort.split(",").join(" ")
        const filters = { ...req.query }
        const excludeField = ["sort", "page", "limit"]
        excludeField.forEach(q => delete filters[q])
        const fields = !req.query.fields ? req.query.fields : req.query.fields.split(",").join(" ")
        console.log(fields, sort)
        Tour.find()
            .select(fields)
            .sort(sort)
            .skip(page * limit)
            .limit(limit)
            .then(tours =>

                res.send({ tours }))
    },
    addTourController: async (req, res,) => {
        if (!Object.keys(req.body).length) return res.status(400).json({ "msg": "no data found request body" })
        Tour.create(req.body).then(data => res.send(data))
    },



    getATour: async (req, res,) => {


        Tour
            .findOneAndUpdate({ _id: req.params.id }, {
                $inc: {
                    viewCount: 1
                }
            })
            .then(tour => {
                tour.viewCount += 1;
                res.send({ tour })
            });
    },



    updateATour: async (req, res,) => {
        if (!Object.keys(req.body).length) return res.status(400).json({ "msg": "no data found request body" })

        Tour
            .findOne({ _id: req.params.id })
            .update(req.body)
            .then(data => res.send(data))
    },
    deleteATour: (req, res,) => {
        Tour.deleteOne({ _id: req.params.id })
            .then(result =>
                res.send({ result })
            )

    },
    getCheapest: (req, res,) => {
        Tour
            .find({})
            .sort({ cost: 1 })
            .limit(3)
            .select(["title", "cost", "img"])
            .then(cheapest => res.send(cheapest))
    },
    getTrending: (req, res,) => {
        Tour
            .find({})
            .sort({ viewCount: -1 })
            .limit(3)
            .select(["title", "cost", "img"])
            .then(cheapest => res.send(cheapest))
    }

}

module.exports = controllers;