const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
* tell Express.js that when it receives a GET request at the URL getShip/name/, to do this code.
*/
router.get("/getShip/:name", function(req, res){
  // look up documents in MongoDB by name.
  Ship.findOne({name: req.params.name}, function(error,doc){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!doc){
      res.status(404).send("No such ship found");
    }
    //if document was found
    else{
      res.send(doc);
    }
  });
});

module.exports = router;