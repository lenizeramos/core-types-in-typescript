enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

console.log(`Today is ${Day.MONDAY}`);

let Race: {
  participants: string[];
  firstPlace: string;
  secondPlace: string;
  thirdPlace: string;
  day: Day;
};
