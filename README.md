# funnyjs

##安装
```
npm install funnyjs --save
```

##使用
```javascript
var funnyjs = require("funnyjs");

var newRunableCode = funnyjs.encode("alert('hello!funnyjs')")

//或者

funnyjs.encodeFile("./src/my.js",function(err,res){
    console.log(res);
})


//或者
var gulp = require("gulp");
gulp.src("./src/my.js").pipe(funnyjs()).pipe(gulp.dest("./funnycode"))

```

###适用于少量代码 ,仅供娱乐，转码后体积会变大。

###逗逼的js代码，就就就是这样ヽ(≧□≦)ノ

###如果转换代码量大，请慎用，后果自负  _(:зゝ∠)_

