const functions = require('firebase-functions');

// http request
exports.randomNumber=functions.https.onRequest((request,response)=>{
const number=Math.round(Math.random()*100);
response.send(number.toString());

});
// http request2
exports.tOtheDojo=functions.https.onRequest((request,response)=>{
    response.redirect('www.google.com');
    
    });
    // htt p callable funtion
    exports.sayHello=functions.https.onCall((data,context)=>{
        const name= data.name;
       return`hello ,${name}`;
    });