// Variables //

const fullName = "Nduka Asoh Obewu";

let age = 30;
let dating = false;
const bioData = {
  height: "187cm",
  weight: 89,
  blood: "o+",
  gen: "AS",
};
const hobby = ["football", "FIFA", ["events", "sight - seeing"]];

const ndukaInfo = [fullName, age, bioData, hobby, dating, age];
console.log(ndukaInfo);
console.log(
  typeof fullName,
  typeof age,
  typeof bioData,
  typeof hobby,
  typeof dating
);
console.log(hobby[1]);
console.log(hobby[2][1]);

console.log(bioData);
// dot notation

console.log(bioData.blood);
console.log(bioData.height);
