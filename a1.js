"use strict";
// let a = ["PIAIC1","PIAIC2","PIAIC3","PIAIC4"];
//     for (let i =0 ; i <a.length ; i++) {
//         console.log(`Student name :${a[i]}` );
//     }
let cleanestCities = ["Karachi", "Lahore", "Peshawar", "Islamabad"];
let b = 0;
for (let i = 0; i <= 4; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        b = 0;
        break;
    }
    else
        b = 1;
}
if (b == 1) {
    console.log("Not found");
}
