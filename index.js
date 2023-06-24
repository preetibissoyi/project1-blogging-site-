const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());    //tells the system that you want json to be used. bodyParser.
app.use(bodyParser.urlencoded({ extended: true })); 
//tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false)
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true)

mongoose.connect("mongodb+srv://preeti:miausi2001@cluster0101.9ryctxd.mongodb.net/Project1-Blogging", {
    useNewUrlParser: true   //allow users to fall back to the old parser if they find a bug in the new parser.
})
.then( () => console.log("MongoDb is connected"))                          
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
