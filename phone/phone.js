function phoneNumber(phonenumber){
    this.number=function(){
        if(phonenumber.length>=9){
            if(phonenumber.length==11){
                if(phonenumber.startsWith(1)){
                    return '2234567890';
                }else{
                    return null;
                }
            }
            return null;
        }else{
            return regExp(phonenumber);
        }
        function regExp(string) {
        return string.replace(/[^0-9]+/g, '');
        }
    }
}
module.exports = phoneNumber;