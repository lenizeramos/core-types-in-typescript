# Core Types in TypeScript

Welcome to core types in TypeScript! In this exercise, you will practice your new skills in TypeScript!

### Configuration

1. Clone the repository to your local machine:

```bash
$ git clone https://your-repository-url.git
$ cd your-repository-directory
```

2. Once cloned, install the `typescript` package:

```bash
npm install -D typescript
```

3. Create a file for each exercise. For instance:

```bash
touch ex02.ts
```

4. Run the command bellow to create your TS configuration file:

```bash
npx tsc --init
```

5. Inside of the `tsconfig.json`, localize the `oudDir` property and add `./dist`:

```json
"outDir": "./dist"
```

This will create the compiled files in a separate folder.

6. Inside of the `tsconfig.json`, localize the `rootDir` property and add `./exercises`:

```json
"rootDir": "./exercises"
```

This will define the location of your source files.

7. You can run the compiler from the root using the command`tsc`. With the configuration that was defined.

The `tsc` will compile all the files inside of the root folder (`/exercises`), generating the `.js` compiled files in the dist folder.

To run `tsc` you don't need `script`; just use the command below:

```bash
nxp tsc
```

If you want, you can compile the files individually, but be aware that this will bypass the configuration, meaning you need to indicate the outDir in the command:

```bash
npx tsc exercises/ex01.ts --outDir dist
```

8. After compiling the files, use `node` to run the files.

```bash
node dist/ex01.ts
```

Happy codding! 🎉

Exercise 1: Create a Reservation Object

1. Create an object called `reservation` with properties `customerInformation`, `paymentInformation`, `checkOut` and `checkIn`.
2. Make sure to specify the types for each property.
3. Print out the reservation's information using `console.log`.

Exercise 2: Create and Manipulate an Array

1. Create an array called `fruits` containing strings representing different fruits.
2. Add a new fruit to the array.
3. Print out the list of fruits.

Exercise 3: Manipulate and Reservations Array

1. Create an array called `reservations` containing the multiple reservations that were created in the previous exercises.
2. Add new property in the `reservation` interface for `pricePerDay`.
3. Change the property paymentInformation to be an interface of `isPayed`, `totalPrice`.
4. Calculate the price using the difference between `checkIn` and `checkOut`. Use the type `Date` and check how you can get the difference in days between two dates.
   Eg: Define a price per day and make the multiplication. If the reservation is two days, make the correct calculation.
5. Add new reservation to the array.
6. Print the information of each reservation. Check how you can print just a specific property.

Exercise 4: Create a Tuple

1. Create a tuple called `coordinate` with two elements: a number representing the x-coordinate and a number representing the y-coordinate.
2. Assign values to the tuple elements.
3. Create an interface of location with the properties `description` and the tuple that you created.
4. Print out the interface and coordinates.

Exercise 5: Create an Enum

1. Create an enum called `Day` with values representing the days of the week (e.g., Sunday, Monday, etc.).
2. Declare variables using the `Day` enum to represent the current day and print it.
3. Create an interface of `Race`, add some properties, like participants, first, second and third places, and also the `day` of the race using the enum.

Exercise 6: Union Types for Function Parameters

1. Create a function called `printId` that accepts either a number or a string as a parameter.
2. Inside the function, check the type of the parameter and print a message accordingly.
3. Return the function accordingly with the type, `number` or `string`.

Exercise 7: Using Literal Types in Function

1. Create a function called `printDirection` that accepts a direction parameter with a literal type of "left" or "right."
2. Inside the function, print a message based on the provided direction.

Exercise 8: Guarding Against "Unknown" Type

1. Create a function `displayValue` that takes a parameter of type `unknown`.
2. Use a type guard to check if the value is a string or a number and print it accordingly.
3. Create a function that receives a variable of the `unknown` type and make some operations. Eg: if is a string, try to loop through to print each char. Don't handle the other cases. Check how hard is to handle a function that receives this kind of type.

Exercise 9: Using the "Never" Type in a Function

1. Create a function `throwError` that throws an error.
2. Specify the return type of the function as `never`.
3. Call the function and catch the error.
4. Return `void` and try to see the difference. Try to return something.
