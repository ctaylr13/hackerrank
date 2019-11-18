function jumpingOnClouds(c) {
    let steps = 0; // set steps to 0
    for (let i = 0; i < c.length - 1;) { // loop till at end of the list 
        let nextStep = c[i + 1];
        let next2step = c[i + 2];

        if (c[i] === 1) { // if at 1 move to next square
            i += 1;
        } else {
            // if not at one check next two steps 
            // if both steps are 0 go forward 2, if only one step is 
            if (nextStep === 0 && next2step === 0) {
                steps++;
                i += 2;
            } else {
                steps++;
                i += 1;
            }
        }
    }
    return steps;
}
// function jumpingOnClouds(c) {
//     let jumps = 0;
//     let i = 0;
//     while(i < c.length) {
//         // if the space two ahead is equal to o
//         if(c[i + 2] === 0) {
//             i += 2; // increase i to that index
//         } else {
//             i += 1; // if not increase i by one
//         }
//         if (i == c.length) {
//             jumps++; // if not at the end of the list increase the jumps by one 
//         }
//     }
//     return jumps;
        
// }
// let c = [0, 1, 0, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 0, 1, 0]));