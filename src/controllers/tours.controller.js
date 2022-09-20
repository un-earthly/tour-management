const Tour = require("../models/Tour.model")
// const {getDb} = require("../../utils/db")
const controllers = {
    allToursController: async (req, res, next) => {
        // const tours =
        res.send({ tours: "tours" })
    },
    addTourController: async (req, res, next) => {
        if (!req.body) return res.status(400).json({ "msg": "no data found request body" })
        Tour.create(req.body)
        res.send({ msg: "this is post route" })
    },
    getATour: async (req, res, next) => {
        viewCount = 1
        // $inc: {
        //     viewCount: 1
        // }
        res.send({ msg: `this is get route ${req.params.id}, ${viewCount}` })
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