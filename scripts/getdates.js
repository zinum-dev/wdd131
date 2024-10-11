let year = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
oLastModif = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(oLastModif);

document.getElementById("currentyear").textContent = `${year}`;
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${oLastModif}`;

"Welcome to the " +
  courseName +
  " " +
  stuFirstName +
  "!"
  `Welcome to the ${courseName} ${stuFirstName}!`;

let esomeprazole = {
  id: "mnb78932",
  amount: 23145,
  amountType: "ct",
  expDate: "10/01/2021",
};
esomeprazole.amount;

esomeprazole["amount"];

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
