// Write an bioData obj and after that write an array that has your favorite hobbies.
// console.log the values when done
const fullName= "Nduka Asoh Obewu";
const bioData = {
    Sex: "Male",
    Married: true,
    Age: 36,
    Blood: "O+",
    Genotype: "As",
    Occupation: "Technology Support",
  };
  
  console.log(bioData);
  
  const hobby = ["Sleeping", "Researching", "Watching movies", "Driving"];
  console.log(hobby);
  
// Create a string variable in three different ways.

let firstName = `Nduka`;
console.log(firstName);
let middleName = 'Asoh';
console.log(middleName);
const lastName = "Obewu";
console.log(lastName);

//  Print to the terminal the datatypes of the values written above  ## 
// const ndukaInfo =[fullName,bioData]
console.log(
    typeof fullName,       
    typeof bioData,        
    typeof bioData.Sex,    
    typeof bioData.Married,
    typeof bioData.Age,    
    typeof bioData.Blood,  
    typeof bioData.Genotype,
    typeof bioData.Occupation 
);
