//const express = require('express')
//const app = express()
//const port = 3000

//app.get('/', (req, res) => {
//  res.send('You Are Now A Full Stack Developer!')
//})

//app.listen(port, () => {
//  console.log(`You Are Now A Full Stack Developer! Port listening at http://localhost:${port}`)
//})
//====================
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

//require('./config/express')(app);
//require('./config/routes')(app);
//

const mongoose = require("mongoose");

//mongoose.connect("mongodb+srv://Cory:dbUser@breezycluster0.lcvf5.mongodb.net/Monday?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
//Username:Prod5/Password:Prod5
mongoose.connect("mongodb+srv://Prod5:Prod5@cluster0.9yjqq.mongodb.net/KingUniWikiDB?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});
app.listen(config.port, console.log(`You Are Now A Full Stack Developer! Port listening at ${config.port}!`));