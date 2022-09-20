var mongoose = require("mongoose");

var TourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        trim: true
    },
    ragistraionStarts: {
        type: Date,
        required: true,
    },
    regisrationsEnds: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    locations: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
        trim: true
    },
    viewCount: {
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model('Tour', TourSchema);