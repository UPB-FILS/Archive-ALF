function lookandsay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1){return seq.length.toString() + p1})
}

function sayandlook(str) {
    return str.replace(/(.)\1*/g, function(seq, p1){return p1 + seq.length.toString()})
}

var num = "0";
for (var i = 10; i > 0; i--) {
    console.log(num);
    num = lookandsay(num);
    //num = sayandlook(num);
}
