// Complete the isValid function below.
function isValid(s) {
    const charMap = {};
    for ( let x of s ) {
        if (charMap[x]) {
            charMap[x]++;
        } else {
            charMap[x] = 1;
        }
    }
    console.log('charMap', charMap);
    let valueArray = Object.values(charMap);
    console.log('valuearray', valueArray);
    var modeMap = {};
    var maxEl = valueArray[0];
    var maxCount = 1;
    for(var i = 0; i < valueArray.length; i++) {
        var el = valueArray[i];
        if(modeMap[el] === null) {
            modeMap[el] = 1;
        } else {
            modeMap[el]++;
        }
        if(modeMap[el] > maxCount) 
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    console.log('most frequent value', maxEl);
    const results = valueArray.filter(x => x !== maxEl);
    console.log('results', results);
    if(results.length === 0) {
        console.log('YES');
        return 'YES';
    } else if (results.length === 1 && (results[0] - 1) === maxEl) {
        return 'YES';
    } else {
        return 'NO';
    }
   
}
let s = 'abcdefghhgfedecba';
console.log(isValid(s));