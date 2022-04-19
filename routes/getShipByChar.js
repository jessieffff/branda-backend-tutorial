const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
* tell Express.js that when it receives a GET request at the URL getShip/char/, to do this code.
*/
router.get("/getShip/secondaryBattery/:secondaryBattery", function(req, res){
  // look up documents in MongoDB by characteristics.
  Ship.find({secondaryBattery: req.params.secondaryBattery}, function(error,docs){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!docs){
      res.status(404).send("No such ship found");
    }
    //if document was found
    else{
      res.send(docs);
    }
  });
});

module.exports = router;