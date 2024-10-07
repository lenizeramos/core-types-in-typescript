const reservations: {
  customerInformation: string;
  paymentInformation: { isPayed: boolean; totalPrice: number };
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;
}[] = [];

function calculatePrice(
  checkIn: Date,
  checkOut: Date,
  pricePerDay: number
): number {
  const msInADay = 1000 * 60 * 60 * 24;
  const days = Math.round((checkOut.getTime() - checkIn.getTime()) / msInADay);
  return days * pricePerDay;
}

console.log(calculatePrice(new Date("2024-10-01"), new Date("2024-10-10"), 22));

function addNewReservation(
  customerInformation: string,
  checkIn: Date,
  checkOut: Date,
  pricePerDay: number,
  isPayed: boolean
) {
  const totalPrice = calculatePrice(checkIn, checkOut, pricePerDay);

  const newReservation = {
    customerInformation,
    paymentInformation: { isPayed, totalPrice },
    checkIn,
    checkOut,
    pricePerDay,
  };

  reservations.push(newReservation);
}
function printReservations() {
  reservations.forEach((reservation) => {
    console.log(`Customer: ${reservation.customerInformation}`);
    console.log(`Check-in: ${reservation.checkIn.toDateString()}`);
    console.log(`Check-out: ${reservation.checkOut.toDateString()}`);
    console.log(`Price per day: $${reservation.pricePerDay}`);
    console.log(`Total Price: $${reservation.paymentInformation.totalPrice}`);
    console.log(
      `Payment Status: ${
        reservation.paymentInformation.isPayed ? "Paid" : "Not Paid"
      }`
    );
    console.log("-----------------------------------");
  });
}

addNewReservation(
  "Lulu",
  new Date("2024-10-01"),
  new Date("2024-10-10"),
  17,
  true
);
addNewReservation(
  "Leia",
  new Date("2024-10-05"),
  new Date("2024-10-15"),
  20,
  false
);
addNewReservation(
  "Livia",
  new Date("2024-10-12"),
  new Date("2024-10-20"),
  25,
  true
);

printReservations();
