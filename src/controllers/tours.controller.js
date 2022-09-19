const controllers = {
    allToursController: async (req, res, next) => {
        res.send({ msg: "this is get all tour route" })
    },
    addTourController: async (req, res, next) => {
        res.send({ msg: "this is post route" })
    },
    getATour: async (req, res, next) => {

        // $inc: {
        //     APICalls: 1
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