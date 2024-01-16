const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); 
console.log(marvel_heros);      // Array(as a data) in Array :: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3]);        // [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][1]);       // flash

const m1 = ["Section-A", "Section-B", "Section-C"];
const m2 = ["Section-D", "Section-E", "Section-F"];
const m3 = m1.concat(m2);
console.log(m3);          /*[
                                'Section-A',
                                'Section-B',
                                'Section-C',
                                'Section-D',
                                'Section-E',
                                'Section-F'
                            ]*/

console.log(m3[4]);    // Section-E

const all = [...m1, ...m2]      // Similar to concat
console.log(all);


const anotherarr = [1,,2,3,[4,5,6],7,8,[6,7,[4,5]]];
const real = anotherarr.flat(Infinity);
console.log(real);                      /* [
                                            1, 2, 3, 4, 5,
                                            6, 7, 8, 6, 7,
                                            4, 5
                                        ] */

// Converting into Array =>

console.log(Array.isArray("Suren"));   // Return false;
console.log(Array.from("Suren"));   // Convert array of characters

console.log(Array.from({name: "Suren"}));   // Interesting case:: Return empty array, you have to tell that make an array of key elements

let s1 = 10;
let s2 = 100;
let s3 = 1000;

let c1 = Array.of(s1,s2,s3);
console.log(c1);               // Return an array :: [10, 100, 1000]
