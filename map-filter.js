const number = [10, 30, 20, 5, 50];
// const output = []
// for (let i = 0; i < number.length; i++) {
//     let element = number[i];
//     let result = element * element;
//     output.push(result);
// }

number.map((x, index, array) => {
    console.log(x * x, index, array);
})

const result = number.map(function(element) {
    return element * element;
})

const bigger = number.filter(x => x > 20);
console.log(bigger);

const findMax = number.find(x => x > 20);
console.log(findMax);

// console.log(output);
console.log(result);