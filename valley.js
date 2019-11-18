function countingValleys(n, s) {
    let seaLevel = 0, result = 0;
    for (let i = 0; i < s.length; i++) {
        seaLevel = (s[i] === 'U') ? seaLevel + 1 : seaLevel - 1;
        result = ((seaLevel === 0) && (s[i]==='U')) ? result+1 : result;
    }
    return result;
}

function valleys(n, s) {
    let seaLevel = 0; 
    let result = 0; // pointer 
    for (let i = 0; i < s.length; i++) {
        // if seaLevel is up seaLevel plus one if not decrease
        if(s[i] === 'U') {
            seaLevel++;
        } else {
            seaLevel--;
        }
        if((seaLevel === 0) && (s[i] === 'U')) {
            result++;
        } else {
            result;
        }
    }
    return result;
}

console.log(valleys(5, 'DDUUUUDDDDUUUUDD'));