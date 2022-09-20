const { request } = require("express")
const Tour = require("../models/Tour.model")
const controllers = {
    allToursController: async (req, res,) => {
        Tour.find()
            .select(["title", "cost", "img"])
            .then(tours =>

                res.send({ tours }

                ))
    },
    addTourController: async (req, res,) => {
        if (!Object.keys(req.body).length) return res.status(400).json({ "msg": "no data found request body" })
        const data = await Tour.create(req.body)
        res.send({ msg: "this is post route", data })
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