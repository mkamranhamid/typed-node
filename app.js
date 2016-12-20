/// <reference path="typings/tsd.d.ts" />
"use strict";
//import {addingUsers} from './mongoschema';
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
//Data parser and static path
var app = express();
//addingUsers(app);
var staticFilesPath = path.resolve(__dirname, "static");
app.use(express.static(staticFilesPath));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
/*
//Routes
app.get('/', (req, res) => {
    let mainFile = path.resolve(__dirname, 'static/index.html')
    res.sendFile('static/index.html');
});

//route to get signup data
app.post('/addUser', (req, res) => {
    dataModel.findOne({ email: req.body.email }, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            return res.json(data);
        }

    })
});


//route to get signin data
app.get('/signup', function(req, res) {
    dataModel.findOne(function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            return res.json(data);
        }

    })
})


//route to save data
app.post('/signup', (req, res) => {
    // var Animal = mongoose.model('Animal', AnimalSchema);
    var user = new dataModel({
        username: req.body.name,
        password: req.body.pass,
        age: req.body.age,
        email: req.body.email,
        date: (new Date().getTime()),
        token: req.body.token,
        company: [],
        role: 'Admin'
    });
    user.save(function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            res.json(data)

        }
    })

});

//add company
app.post('/addCompany', (req, res) => {
    // var Animal = mongoose.model('Animal', AnimalSchema);
    var companyAdd = new companyModel({
        name: req.body.name,
        addedBy: req.body.uid,
        date: new Date(),
        users: []
    });
    companyAdd.save(function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            return res.json(data)
        }

    })

});
//get company
app.get('/addCompany', function(req, res) {
    companyModel.find(function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            return res.json(data)
        }
    })
})


//add company to users array
app.post('/getCompanies', function(req, res) {
    companyModel.find({ addedBy: req.body.userId }, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            if (data != null) {
                return res.json(data)
            }
        }

    })
});

//to add users in company user's array
app.post('/addCompanyUsers', function(req, res) {

    var newuser = new userModel({
        name: req.body.name,
        email: req.body.email
    })
    newuser.save(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            if (data != null) {
                  return res.json(data)
            }
        }
    })
    
    // companyModel.update(
    //     { _id:req.body.companyId },
    //     {$addToSet:{users:req.body.userId}},
    //     function(err,data){
    //         if(err){
    //             console.log(err)
    //         }
    //         else{
    //             if(data != null){
    //                 console.log(data)
    //                 return res.json(data)
    //             }
    //         }
    //     }
    // )
})


app.post('/addtousersarr', function(req, res) {
    dataModel.update(
        { _id: req.body.userId },
        { $addToSet: { company: req.body.companyId } },
        function(err, data) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(data)
                return res.json(data)
            }
        }
    )
})


//route to get signin data
app.post('/signin', function(req, res) {
    dataModel.findOne({ username: req.body.username, password: req.body.pass }, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            return res.json(data);
        }

    })
})

app.post('/dashboard', (req, res) => {
    dataModel.findOne({ token: req.body.token }, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
        }
        res.json(data);
    })

});
app.use(errorHandler3);
function errorHandler3(err, req, res, next) {
    res.send("<h2 style = 'color: red;'>" + err + "</h2>");
}

// app.get('/h', (req, res)=> {
//     let helloFile = path.resolve(__dirname, './static/hello.html')
//     res.sendFile(helloFile);
// });

// app.get('/about', (req, res)=> {
//     let aboutFile = path.resolve(__dirname,'static/about.html')
//     res.sendFile(aboutFile);
// });*/
//App listener 
app.listen(3000, function () {
    console.log('app is listening on port 3000');
});
