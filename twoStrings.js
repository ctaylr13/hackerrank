function twoStrings2(s1, s2) {
    // create object map
    var map = {};
    // add string one to object
    for (let i of s1) {
        map[i] = 1;
    }
    console.log('MAP', map);
    // loop over string 2
    // if the string at 2 exist as a key then return yes 
    for (let i of s2) {
        if (map[i])
            return "YES";
    }
    return "NO";

}


function myTwoStrings(s1, s2) {
    let shorter;
    let longer;
    if(s1.length > s2.length) {
        shorter = s2;
        longer = s1;
    } else {
        shorter = s1;
        longer = s2;
    }

    let a = new Set(s1);
    console.log('new set', a);

    shorter = shorter.split('');
    longer = longer.split('');
 
    let i = 0; 
    let flag = 'NO';
    while (i < longer.length) {
        let firstLetter = longer[i];
        for(let j = 0; j < shorter.length; j++) {
            if(firstLetter === shorter[j]) {
                flag = 'YES';
            } 
        }
        i++;
    }
    return flag;
}
let s1 = 'texassa';
let s2 = 'sfxyf';
console.log(twoStrings2(s1, s2));