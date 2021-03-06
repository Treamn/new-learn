'use strict'

var area = function(r,PI){
    if(arguments.length == 1){
        PI = 3.14;
    }

    var s = Math.pow(r,2)*PI;
    console.log(s);
}

area(2);

area(2,3.1415);