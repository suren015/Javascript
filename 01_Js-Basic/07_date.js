// Date => JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970.

let myDate = new Date();

console.log(typeof(date));  // Object datatype

console.log(myDate);    // Return a date in ISO format 2024-01-15T07:37:17.611Z

console.log(myDate.toDateString());  // Return a date as string value // Mon Jan 15 2024
console.log(myDate.toISOString());   // Return a date as string in ISO format
console.log(myDate.toLocaleDateString('en-IN'));   // 15/1/2024
console.log(myDate.toLocaleString());    // 1/15/2024, 7:37:17 AM


//Month will be 0-based =>
let mycreatedate = new Date(2024, 0, 15)  
console.log(mycreatedate.toDateString());  // Mon Jan 15 2024

let newdate = new Date(2024, 2, 12, 5, 4);
console.log(newdate.toLocaleString());    // 3/12/2024, 5:04:00 AM

newdate = new Date("11-10-2024");   // mm-dd-yyyy
console.log(newdate.toDateString());

// TimeStamp =>

let timestamp = Date.now();
console.log(timestamp);   // Return the number of millisecond till jan 1, 1970

console.log(Math.floor(Date.now()/1000));  // Return in seconds

console.log(Math.floor(Math.floor(Date.now()/1000)/60)); // Return in Minutes


let date1 = new Date();
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getMonth()+1);

