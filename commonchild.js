function commonChild(s1, s2) {
    let current = Array(s1.length + 1);
    let prev = Array(s1.length + 1);
    for(let x = 0; x <= s1.length; x++) {
        for(let y = 0; y <= s2.length; y++) {
            if(x === 0 || y === 0) {
                current[y] = 0;
            } else if(s1[x - 1] === s2[y -1]) {
                current[y] = prev[y - 1] + 1;
            } else {
                current[y] = Math.max(current[y - 1], prev[y]);
            }
        }
        prev = [...current];
    }
    return current[s1.length];
}
let s1 = 'ABCDEF';
let s2 = 'FBDAMN';
console.log(commonChild(s1, s2));