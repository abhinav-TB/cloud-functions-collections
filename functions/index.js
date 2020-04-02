const functions = require('firebase-functions');

// auth trigger

exports.newUserSighUp=functions.auth.user().onCreate(user=>{
    console.log("user created,user.email,user.uid")
});

exports.userDeleted=functions.auth.user().onDelete(user=>{
    console.log("user deleted",user.email,user.uid)
});


