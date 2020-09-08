let mongoose = require('mongoose');

let Teacher = require('./models/teacher');
let Student = require('./models/student');

let express = require('express'); 

let app = express();
let bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({
    extended:false
}));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.listen(8080);


///////////////////////////////////////////////////
let DB_URL = 'mongodb://localhost:27017/fit2095';

let print = console.log;

mongoose.connect(DB_URL, function(err){
    if (err) print(err);
    else{
        print('Connect to DB Successfully');

    }
});


//Endpoints

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html')
})