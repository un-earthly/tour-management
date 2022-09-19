
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.mongoAdmin}:${process.env.mongoPass}@cluster0.vcjhy.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     // perform actions on the collection object
//     client.close();
// });

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = client.db("tourDb")

            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};