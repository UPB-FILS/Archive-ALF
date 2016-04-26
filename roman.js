//DECODE
var Roman = {
  Values: [['M', 1000], ['CM', 900], ['D',  500], ['CD', 400], 
           ['C',  100], ['XC',  90], ['L',  50],  ['XL',  40],  
           ['X',   10], ['IX',   9], ['V',   5],  ['IV',   4],   
           ['I',    1]],
 
  parse: function(str) {
    var result = 0
    for (var i=0; i<Roman.Values.length; ++i) {
      var pair = Roman.Values[i]
      var key = pair[0]
      var value = pair[1]
      var regex = RegExp('^' + key)
      while (str.match(regex)) {
        result += value
        str = str.replace(regex, '')
      }
    }
    return result
  }
}
 
var test_data = ['MCMXC', 'MDCLXVI', 'MMVIII']
for (var i=0; i<test_data.length; ++i) {
  var test_datum = test_data[i]
  console.log(test_datum + ": " + Roman.parse(test_datum)) 
}

//ENCODE
var roman = {
    map: [
        1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC',
        50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I',
    ],
    int_to_roman: function(n) {
        var value = '';
        for (var idx = 0; n > 0 && idx < this.map.length; idx += 2) {
            while (n >= this.map[idx]) {
                value += this.map[idx + 1];
                n -= this.map[idx];
            }
        }
        return value;
    }
}
 
roman.int_to_roman(1999); // "MCMXCIX"
