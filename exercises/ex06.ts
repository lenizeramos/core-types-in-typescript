function printId(input: number | string): string {
  return `${input} is a ${typeof input}`;
}

console.log(printId(3));
console.log(printId("hi"));
//console.log(printId([])); // Argument of type 'never[]' is not assignable to parameter of type 'string | number'.
