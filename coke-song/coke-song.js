function cokeSong(number,anotherNumber){
    this.myNumber=number;
    this.myAnotherNumber=anotherNumber;
}
cokeSong.prototype.verse=function(myNumber){
    if(myNumber==1){
     return  (myNumber)+" cans of coke in the box, "+ (myNumber) + " cans of coke.\nTake it down and pass it around, no more cans of coke in the box.\n";   
    }if(myNumber==0){
        return 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
    }
     return  (myNumber)+" cans of coke in the box, "+ (myNumber) + " cans of coke.\nTake one down and pass it around, " +(myNumber-1)+ " cans of coke in the box.\n";
    }

cokeSong.prototype.sing=function(myNumber,myAnotherNumber){

    if(myAnotherNumber==undefined || myNumber==undefined){
        myAnotherNumber=myNumber-1;
         return (myNumber)+' cans of coke in the box, '+ (myNumber) +' cans of coke.\nTake one down and pass it around, '+ (myNumber-1) +' cans of coke in the box.\n\n'+ (myNumber-1) +' cans of coke in the box, '+ (myNumber-1) +' cans of coke.\nTake one down and pass it around, '+(myAnotherNumber-1)+' can of coke in the box.\n\n'+(myAnotherNumber-1)+' can of coke in the box, '+(myAnotherNumber-1)+' can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n\nNo more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
    }
    return (myNumber)+' cans of coke in the box, '+ (myNumber) +' cans of coke.\nTake one down and pass it around, '+ (myNumber-1) +' cans of coke in the box.\n\n'+ (myNumber-1) +' cans of coke in the box, '+ (myNumber-1) +' cans of coke.\nTake one down and pass it around, '+(myAnotherNumber)+' cans of coke in the box.\n\n'+(myAnotherNumber)+' cans of coke in the box, '+(myAnotherNumber)+' cans of coke.\nTake one down and pass it around, '+(myAnotherNumber-1)+' cans of coke in the box.\n';
}
module.exports = cokeSong;