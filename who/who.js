function who(){}

who.prototype.name=function(name){
    if(name==undefined){
        return "One for you, one for me.";
    }
    else {
        return "One for "+name+", one for me.";
    }
}

module.exports = who;

     