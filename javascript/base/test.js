function area(r,pi){
    if(arguments.length == 1){
        pi = 3.14;
    }
    var area = pi * Math.pow(r,2);
    return area;
}

area(2,3.1415)