const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    //Validate request 
    try{
            // creating a tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published:req.body.published ? req.body.published : false
    }
    console.log(req.body);

    //Saving tutorial to Database
    Tutorial.create(tutorial)
        .then(data => {
            console.log("Sending.......");
            res.json(data);
        })
        .catch(err => {
            // res.status(500).send({
            //     message: err.message || "Err.............."
            // });
            console.log(err);
        });

    if(!req.body.title){
        res.status(400).send({
            message: "Content can't be empty!"
        });
        console.log("Entered....")
        return;
    }}catch(err){console.log(err)}
}
    
//     // creating a tutorial
//     const tutorial = {
//         title: req.body.title,
//         description: req.body.description,
//         published:req.body.published ? req.body.published : false
//     }

//     //Saving tutorial to Database
//     Tutorial.create(tutorial)
//         .then(data => {
//             // res.send(data)
//             console.log("Sending.......");
//         })
//         .catch(err => {
//             // res.status(500).send({
//             //     message: err.message || "Err.............."
//             // });
//             console.log(err);
//         });
// }; 
// var req = {
//     body: {
//         title: "Niket",
//         description: "It's very cool brand",
//         published: true
//     },
// }

//Retrieve only object where id=1
exports.findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Tutorial.findByPk(id, {raw: true})
        .then(data => {
            // console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        });
}

//Retrieve all objects with where clause
exports.findAll = async (req, res) => {
    const condition = { id: { [Op.gt]: 2 } }
    // Tutorial.findAll({ where: condition})
    //     .then(data => {
    //         for(i of data){
    //             console.log(i.get());
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    var result = await Tutorial.findAll
    ({ 
        limit: 10, 
        order: [['id', 'DESC']],
        Sequelize.fn('')
});
    res.json(result)
}

exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    Tutorial.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if(num == 1){
            res.send({message: "Tutorial updated successfully"});
            } else {
                res.send({
                    message: `Tutorial with id=${id} can't be updated`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while updating id: " +id
            });
        })
}

// for(let i=0; i<100; i++)
// this.create(req);
// this.findOne();
// this.findAll(); 
// this.update(req); 