function specialString(str) {
    let total = 0;
    // Length of the string 
    total = str.length;
    // return pairs 
    let strArr = str.split('');
    let pairs = 0;
    let i = 0; 
    while(i < strArr.length) {
        if (strArr[i] === strArr[i + 1]) {
            pairs++;
        }
        i++;
    }
    total = total + pairs;
    
    // return oreo slice
    let slice = 0;
    let j = 0;
    while(j < strArr.length) {
        if (strArr[j] === strArr[j + 2]) {
            slice++;
        }
        j++;
    }
    // check to see if the string is all matches 
    let chars = {};
    for (let x of strArr) {
        if(chars[x]) {
            chars[x]++;
        } else {
            chars[x] = 1;
        }
    }
    if (Object.keys(chars).length === 1) {
        total = total + 1;
    }
    console.log('chars', Object.keys(chars).length);

    total = total + slice;
    return total;
}

var string1 = 'mnonopoo';
var string2 = 'asasd';
console.log(specialString(string2));