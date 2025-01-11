const express = require('express')
const app = express();
const mongoose = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //store in req.body




app.get('/', function (req, res) {
  res.send('welcome to my hotel!!');
})

//import router files 
const personRoutes = require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/MenuItemRoutes');

//use the routers
app.use('/person', personRoutes);
app.use('/menuitem',MenuItemRoutes );

app.listen(3000, ()=>{
    console.log('listen on port 3000')
})





















/*const objectToConvert ={
    name: "Alice",
    Age: 25

};
const json = JSON.stringify(objectToConvert) ;
console.log(json);*/




































/* const notes = require('./notes.js')
   var _ = require('lodash');
console.log('server file is running ');

var age  = notes.age;
var result = notes.addNumber(age+23, 19)
console.log(age);
console.log('result is now:' +result)



var data = ["person", "person",1,2,1,2, 'name', 'age','2'];
var filter = _.uniq(data);
console.log(filter);
*/






















/*var fs = require('fs');
var os = require('os');

var user = os.userInfo()
console.log(user.username);

fs.appendFile('greeting.txt', 'Hi' +user.username +'!\n' , ()=>{
    console.log('created');
})
*/




//function add(a,b){
 //   return a + b;

//var add = function(a,b){
 //   return a+b;


//var add= (a,b) => {return a+b}



//var add = (a,b) => a+b;
//var result = add(20000,69999);
//console.log(result);

/*function callback(){
    console.log('Manu Sandhu');
}

const add =function(a,b, callback){
    var result = a+b;
    console.log('result: ' +result);
    callback();
}

add(4,509876543213456789, callback);*/









































/*function add(a,b){
    return a+b;
}
var add=function(a,b) {
    return a+b;
}*/

/*var add = (a,b) => {return a+b}*/

/*var add = (a,b) => a+b;

var result = add(2,900);
console.log(result);

(function(){
    console.log('manu sandhu');
})();
function callback(){
    console.log('manu is calling')
} 
const add =function(a,b ,callback){
    var result= a+b;
    console.log('result: ' +result);
    callback();
}
add(3,4, callback);

add(2, 3, () => console.log('add completed'));*/