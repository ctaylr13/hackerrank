function sockMerchant(n, ar) {
    const sockMap = {};
    let pairs = 0;

    for (let x of ar) {
        if(sockMap[x]) {
            sockMap[x]++;
        } else {
            sockMap[x] = 1;
        }
    }

    for (let x in sockMap) {
        let divide = 0;
        if (sockMap[x] >= 2) {
            divide = Math.floor(sockMap[x] / 2);
            pairs = pairs + divide;
        }
    }
    return console.log('PAIRS VALUE',pairs);
}

const ar = [1, 2, 1, 2, 1, 3, 2, 2, 2, 4, 5, 5, 6];
const n = ar.length;
sockMerchant(n, ar);

