/**
 * Created by lvxin on 2016/7/14.
 */
var lxf = require("lxfileutil")();
var through = require('through2');
function aaencode(text) {
  var t;
  var b = [
    "(c^_^o)",
    "(ﾟΘﾟ)",
    "((o^_^o) - (ﾟΘﾟ))",
    "(o^_^o)",
    "(ﾟｰﾟ)",
    "((ﾟｰﾟ) + (ﾟΘﾟ))",
    "((o^_^o) +(o^_^o))",
    "((ﾟｰﾟ) + (o^_^o))",
    "((ﾟｰﾟ) + (ﾟｰﾟ))",
    "((ﾟｰﾟ) + (ﾟｰﾟ) + (ﾟΘﾟ))",
    "(ﾟДﾟ) .ﾟωﾟﾉ",
    "(ﾟДﾟ) .ﾟΘﾟﾉ",
    "(ﾟДﾟ) ['c']",
    "(ﾟДﾟ) .ﾟｰﾟﾉ",
    "(ﾟДﾟ) .ﾟДﾟﾉ",
    "(ﾟДﾟ) [ﾟΘﾟ]"
  ];
  var r = "ﾟωﾟﾉ= /｀ｍ´）ﾉ ~┻━┻   //*´∇｀*/ ['_']; o=(ﾟｰﾟ)  =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); ";
  r += "(ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);" +
    "(ﾟДﾟ)={ﾟΘﾟ: '_' ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +'_') [ﾟΘﾟ] " +
    ",ﾟｰﾟﾉ :(ﾟωﾟﾉ+ '_')[o^_^o -(ﾟΘﾟ)] " +
    ",ﾟДﾟﾉ:((ﾟｰﾟ==3) +'_')[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +'_') [c^_^o];" +
    "(ﾟДﾟ) ['c'] = ((ﾟДﾟ)+'_') [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];" +
    "(ﾟДﾟ) ['o'] = ((ﾟДﾟ)+'_') [ﾟΘﾟ];" +
    "(ﾟoﾟ)=(ﾟДﾟ) ['c']+(ﾟДﾟ) ['o']+(ﾟωﾟﾉ +'_')[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +'_') [ﾟｰﾟ] + " +
    "((ﾟДﾟ) +'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+" +
    "((ﾟｰﾟ==3) +'_') [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ['c']+" +
    "((ﾟДﾟ)+'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ['o']+" +
    "((ﾟｰﾟ==3) +'_') [ﾟΘﾟ];(ﾟДﾟ) ['_'] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];" +
    "(ﾟεﾟ)=((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+" +
    "((ﾟДﾟ)+'_') [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +'_') [o^_^o -ﾟΘﾟ]+" +
    "((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟωﾟﾉ +'_') [ﾟΘﾟ]; " +
    "(ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]='\\\\'; " +
    "(ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];" +
    "(oﾟｰﾟo)=(ﾟωﾟﾉ +'_')[c^_^o];" +//TODO
    "(ﾟДﾟ) [ﾟoﾟ]='\\\"';" +
    "(ﾟДﾟ) ['_'] ( (ﾟДﾟ) ['_'] (ﾟεﾟ+";
  r += "(ﾟДﾟ)[ﾟoﾟ]+ ";
  for (var i = 0; i < text.length; i++) {
    n = text.charCodeAt(i);
    t = "(ﾟДﾟ)[ﾟεﾟ]+";
    if (n <= 127) {
      t += n.toString(8).replace(/[0-7]/g, function (c) {
        return b[c] + "+ ";
      });
    } else {
      var m = /[0-9a-f]{4}$/.exec("000" + n.toString(16))[0];
      t += "(oﾟｰﾟo)+ " + m.replace(/[0-9a-f]/gi, function (c) {
          return b[parseInt(c, 16)] + "+ ";
        });
    }
    r += t;
  }
  r += "(ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ('_');";
  return r;
}

var _export = function () {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      next();
      return;
    }
    file.contents = new Buffer(aaencode(file.contents.toString()));
    cb(null, file);
  });
}
_export.encode = function(text){
  return aaencode(text);
}
_export.encodeFile = function(path,cb){
  lxf.readFile(path,{encoding:'utf-8'},function(err,buffer){
    if("function"===typeof cb){
      if(err){
        cb.call(null,err,null);
      }else{
        cb.call(null,null,aaencode(buffer.toString()));
      }
    }
  })
}

module.exports =_export;