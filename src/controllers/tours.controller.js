const Tour = require("../models/Tour.model")
// const {getDb} = require("../../utils/db")
const controllers = {
    allToursController: async (req, res, next) => {
        Tour.find().select(["-viewCount", "-__v"])
            .then(tours =>

                res.send({ tours }

                ))
    },
    addTourController: async (req, res, next) => {
        if (!Object.keys(req.body).length) return res.status(400).json({ "msg": "no data found request body" })
        const data = await Tour.create(req.body)
        res.send({ msg: "this is post route", data })
    },



    getATour: async (req, res, next) => {


        Tour.findOneAndUpdate({ _id: req.params.id }, {
            $inc: {
                viewCount: 1
            }
        }).select(["-viewCount", "-__v"])
            .then(tours =>

                res.send({ tours }

                ));
    },



    updateATour: async (req, res, next) => {
        if (!Object.keys(req.body).length) return res.status(400).json({ "msg": "no data found request body" })

        res.send({ msg: `this is patch route ${req.params.id}` })
    },
    deleteATour: async (req, res, next) => {
        const result = await Tour.deleteOne({ _id: req.params.id })
        res.send({ result })

    },
    getCheapest: (req, res, next) => {
        Tour
            .find({})
            .sort({ cost: 1 })
            .limit(3)
            .select(["-viewCount", "-__v"])
            .then(cheapest => res.send(cheapest))
    },
    getTrending: (req, res, next) => {
        Tour
            .find({})
            .sort({ viewCount: -1 })
            .limit(3)
            .select(["-viewCount", "-__v"])
            .then(cheapest => res.send(cheapest))
    }

}

module.exports = controllers;