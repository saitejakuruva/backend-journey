const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    //Validate request 
    try{
        console.log(req);
    if(!req.body.title){
        // res.status(400).send({
        //     message: "Content can't be empty!"
        // });
        console.log("Entered....")
        return;
    }}catch(err){console.log(err)}

    
    // creating a tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published:req.body.published ? req.body.published : false
    }

    //Saving tutorial to Database
    Tutorial.create(tutorial)
        .then(data => {
            // res.send(data)
            console.log("Sending.......");
        })
        .catch(err => {
            // res.status(500).send({
            //     message: err.message || "Err.............."
            // });
            console.log(err);
        });
}; 
var req = {
    body: {
        title: "Nike",
        description: "It's very cool brand",
        published: true
    }
}
for(let i=0; i<100; i++)
this.create(req);