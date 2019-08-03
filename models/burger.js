// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      console.log(res);
      cb(res);
    });
  },
  // if I remove vals from orm.insertOne I can get the post to run without an error but nothing is added to the dB an no info is displayed.
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals , function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
