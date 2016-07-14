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

funnyjs.encodeFile("./今天老板不在家/my.js",function(err,res){
    console.log(res);
})


//或者
var gulp = require("gulp");
gulp.src("./今天老板不在家/my.js").pipe(funnyjs()).pipe(gulp.dest("./funnycode"))

```


###
逗逼的js代码，就就就是这样ヽ(≧□≦)ノ

###如果转换代码量大，请慎用，后果自负  _(:зゝ∠)_

