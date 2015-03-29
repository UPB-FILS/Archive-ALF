var kolakoski = "1 2 2";
for (var i = 2; i < 1000; i++) {
    kolakoski = kolakoski.concat((' '+(1+i%2)).repeat(parseInt(kolakoski.charAt(2*i),10)));
}

console.log(kolakoski);
