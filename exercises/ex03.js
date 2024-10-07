var reservations = [];
function calculatePrice(checkIn, checkOut, pricePerDay) {
    var msInADay = 1000 * 60 * 60 * 24;
    var days = Math.round((checkOut.getTime() - checkIn.getTime()) / msInADay);
    return days * pricePerDay;
}
console.log(calculatePrice(new Date("2024-10-01"), new Date("2024-10-10"), 22));
function addNewReservation(customerInformation, checkIn, checkOut, pricePerDay, isPayed) {
    var totalPrice = calculatePrice(checkIn, checkOut, pricePerDay);
    var newReservation = {
        customerInformation: customerInformation,
        paymentInformation: { isPayed: isPayed, totalPrice: totalPrice },
        checkIn: checkIn,
        checkOut: checkOut,
        pricePerDay: pricePerDay,
    };
    reservations.push(newReservation);
}
function printReservations() {
    reservations.forEach(function (reservation) {
        console.log("Customer: ".concat(reservation.customerInformation));
        console.log("Check-in: ".concat(reservation.checkIn.toDateString()));
        console.log("Check-out: ".concat(reservation.checkOut.toDateString()));
        console.log("Price per day: $".concat(reservation.pricePerDay));
        console.log("Total Price: $".concat(reservation.paymentInformation.totalPrice));
        console.log("Payment Status: ".concat(reservation.paymentInformation.isPayed ? "Paid" : "Not Paid"));
        console.log("-----------------------------------");
    });
}
addNewReservation("Lulu", new Date("2024-10-01"), new Date("2024-10-10"), 17, true);
addNewReservation("Leia", new Date("2024-10-05"), new Date("2024-10-15"), 20, false);
addNewReservation("Livia", new Date("2024-10-12"), new Date("2024-10-20"), 25, true);
printReservations();
