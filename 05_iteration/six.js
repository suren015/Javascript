const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values);   // Undefined

// forEach loop doesn't return any value


const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNum.filter( (num) => num>5);
console.log(newNum);

// For curly Braces we have to use return keyword to return the values
const Nnum = myNum.filter( (num)=>{
    return num>5;
})
console.log(Nnum);


// Return elements by using forEach loop
const newNum1 = [];
myNum.forEach( (num) => {
    if(num > 5){
        newNum1.push(num);
    }
})
console.log(newNum)


// An example::>

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBook = books.filter( (bk) => {
    if(bk.genre=="History"){
        return true;
    }
})

console.log(userBook);

const userBook1 = books.filter((bk)=>bk.genre=='Fiction');
console.log(userBook1);