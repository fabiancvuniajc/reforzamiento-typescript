const myArray: number[] = [1, 2, 3, 4, 5, 6];

//const myArray2 = myArray; (No se puede hacer)
const myArray2 = [...myArray];

//myArray2.push([7, 8, 9, 10]);

myArray2.push(7, 8, 9, 10);

console.log({ myArray, myArray2 });