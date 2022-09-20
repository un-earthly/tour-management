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
        // const viewCount = 



        Tour.findOneAndUpdate({ _id: req.params.id }, {
            $inc: {
                viewCount: 1
            }
        }).select(["-viewCount", "-__v"])
            .then(tours =>

                res.send({ tours }

                ))
        // res.send({ msg: "this is a single tour find route", data })


        // res.send({ msg: `this is get route ${req.params.id}, ${viewCount}` })
    },
    updateATour: async (req, res, next) => {
        res.send({ msg: `this is patch route ${req.params.id}` })
    },
    deleteATour: async (req, res, next) => {
        res.send({ msg: `this is delete route ${req.params.id}` })
    },
    getCheapest: async (req, res, next) => {
        res.send({ msg: "this is cheapest route" })
    },
    getTrending: async (req, res, next) => {
        res.send({ msg: "this is trending route" })
    }

}

module.exports = controllers;