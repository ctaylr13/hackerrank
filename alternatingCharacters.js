function alternatingCharacters(s) {
    var strArray = s.split('');
    console.log(strArray);
    console.log(newStr);
    let i = 1;
    let count = 0;
    var newStr = [s[0]];
    while (i < s.length) {
        let newStrLast = newStr[newStr.length - 1];
        if (s[i] !== newStrLast) {
            newStr.push(s[i]);
        } else {
            count++;
        }
        console.log('newStr', newStr);
        i++;
    }
    return count;
}

console.log(alternatingCharacters('BABABA'));