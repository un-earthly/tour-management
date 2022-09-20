const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.mongoAdmin}:${process.env.mongoPass}@cluster0.vcjhy.mongodb.net/?retryWrites=true&w=majority`;

let dbConnection;

module.exports = {
    connectToServer: () => {

        mongoose
            .connect(uri)
            .then(() => console.log("Successfully connected to MongoDB."))
            .catch(err => console.log(err))
    },

    getDb: function () {
        return dbConnection;
    },
};