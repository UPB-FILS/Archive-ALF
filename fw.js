//creates Fibonacci Word to n as described on Rosetta Code
//see rosettacode.org/wiki/Fibonacci_word
function fibWord(n) {
    var test = [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1,0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1,0, 1, 0, 0, 1, 0].join('');
    var w = "0";
 
    for (var i = 0; i <= n; i++) {
        w = (w.charAt(i)=='0'?w.concat('10'):w.concat('0'))
        console.log(w);
    }
    console.log(test);
    console.log(test == w);
}



fibWord(60);
