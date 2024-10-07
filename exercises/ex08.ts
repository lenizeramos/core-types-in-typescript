function displayValue(input: unknown): string {
  let type = typeof input;
  if (type === "number" || type === "string") {
    return `${input} is a number or a string`;
  } else {
    return `${input} is neither a number nor a string`;
  }
}

console.log(displayValue(5));
console.log(displayValue("hey"));
console.log(displayValue(false));

function operationValue(input: unknown): void {
  let type = typeof input;
  if (type === "number") {
    console.log(input * input); // 'input' is of type 'unknown'.
  } else if (type === "string") {
    for (const element of input) { // 'input' is of type 'unknown'.
      console.log(element); 
    }
  } else {
    console.log(`${input} is neither a number nor a string`);
  }
}

operationValue("hello");
operationValue(4)