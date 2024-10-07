let reservation: {
  customerInformation: string;
  paymentInformation: boolean;
  checkIn: Date;
  checkOut: Date;
} = {
  customerInformation: "Lulu",
  paymentInformation: true,
  checkIn: new Date("2024-10-01"),
  checkOut: new Date("2024-10-10"),
};

console.log(reservation);