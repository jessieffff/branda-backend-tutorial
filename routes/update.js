const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a PATCH request at the URL /updateShip/, to do this code.
 */
router.patch("/updateShip/:name", function(req, res){
  //check if the name is given
  if(req.params.name == " ") {
    res.status(400).send("Ship name is required");  
  } else {
    Ship.findOneAndUpdate({name: req.params.name},{secondaryBattery: "super power"}, null, function(error,doc){
      // if there was an error
      if(error){
        console.error("Error finding ship",error);
        res.status(500).send(error);
      }
      // if no document was found
      else if(!doc){
        res.status(404).send("No such ship found");
      }
      //return the updated doc
      else{
        res.send(doc);
      }
    });
  }

});

module.exports = router;