var handler = {};

handler.notFound = function(data,callback)
{
    callback(404,{msg:"page not found"});
}

handler.hello = function(data,callback){
    if(data.method=="POST")
        callback(200,{msg:"hello world"});
    else
        callback(200,{msg:"welcome to my app"})
}

var router = {
    notFound:handler.notFound,
    hello:handler.hello
}

module.exports = router;