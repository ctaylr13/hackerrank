// Complete the rotLeft function below.
function rotLeft(a, d) {
    let holder = []; // set new array to hold values 
    let i = d;
    while(holder.length !== a.length) {
        if(i > a.length - 1) {
            i = 0;
        }
        holder.push(a[i]);
        i++;
    }
    return holder;
}

let a = [1, 2, 3, 4, 5, 6 , 7];
let d = 3;
console.log(rotLeft(a, d));