let FavCity: string[] = ["Lahore","Islamabad","Karachi","Toba","Gojra"];

console.log(`Original Order :  ${FavCity}`);

FavCity.sort();
console.log(`In alphabetical order :  ${FavCity}`);

  
console.log(`Original Order :  ${FavCity}`);

FavCity.sort((a,b)=> b.localeCompare(a));
console.log(`Reverse alphabetical order : ${FavCity}`);
FavCity.sort();
console.log(`Original Order :  ${FavCity}`);

FavCity.reverse();
console.log(`Reverse the order : ${FavCity}`);
        
FavCity.reverse();      
console.log(`Original Order :  ${FavCity}`);





