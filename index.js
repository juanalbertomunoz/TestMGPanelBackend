const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")

const PORT = 7124

const app = express()
const dbConnect = require("./config/mongo")

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));


app.use(bodyParser.json()); // Analiza los cuerpos que sean tipo JSON
app.use(bodyParser.urlencoded({ extended: true })); // Analiza los cuerpos que tengan el tipo 'application/x-www-form-urlencoded'


/**
 * @ROUTESss
 * 
 */
const userRoutes = require("./routes/users")



/**
 * @MIDDLEWARE
 * 
 */
app.use("/api/users", userRoutes)


app.get("/", (req, res, next) => {
    res.render("public")
       
});
app.get("/private", (req, res, next) => {
    res.render("private")
       
});


app.listen(PORT, () => {
    console.log( 'Server express is connected in ' + PORT + ' PORT')
})
dbConnect()
