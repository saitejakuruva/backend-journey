const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const tutorailC = require("./app/controllers/tutorial.controller");

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

// app.get('/',(req, res) => {
//     res.json({message: "Welcome to my backend hustle"});
// });


const db = require("./app/models");
// db.sequelize.sync({force: true}).then(() => {
//     console.log("Dropping and resyncing the table...");
// });

db.sequelize.authenticate().then(() => {
    console.log("Connected to DB");
})
.catch(err => {
    console.log(err);
})

var router = require("./app/routes/tutorial.routes");
app.use('/api/tutorials', router);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}.`);
});

// app.get('/create', tutorailC.findAll);
