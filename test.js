/**
 * Created by lvxin on 2016/7/14.
 */
var funnyjs = require("./index");

var newRunableCode = funnyjs.encode("alert('hello!funnyjs')");
console.log(newRunableCode)

// funnyjs.encodeFile("./index.js",function(err,res){
//   console.log(res);
// })