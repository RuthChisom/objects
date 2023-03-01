// Question 1: Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function InstagramPost(author, content, image, views, likes){
    this.authorHandle = author;
    this.content = content;
    this.imageLink = image;
    this.noOfViews = views;
    this.noOfLikes = likes;
  }


// Question 2: Create 2 Instagram post objects from the constructor function you created above

const firstInstagramPost = new InstagramPost("Ruth Chisom", "Adventures of Motherhood", "facebook.com/ruthchisom", 12000, 10000);
const secondInstagramPost = new InstagramPost("Nathaniel Obidike", "My Mom & I", "facebook.com/nathoo", 50000, 40000);

console.log(firstInstagramPost);
console.log(secondInstagramPost);

// Question 3: Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

// A. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location){
    return {
     name,
     age,
     location
    }
}
const Musa = createPerson('Musa Dawodu', 19, "Lekki, Lagos State");
console.log(Musa);


// B. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(ENG, GOVT, LIT, CRK){
    return {
        English: ENG,
        Government: GOVT,
        Literature: LIT,
        CRK
    }
}
const resultMusa = createJambScores(70, 85, 82, 94);
console.log(resultMusa);

Musa.results = resultMusa;
console.log(Musa);
 

// Question 4: What are the different ways you can clone an object? Give examples for each of them.

const firstObject = { 
Anambra:Awka,
Bauchi: Bauchi,
Bayelsa: Yenegoa
};
console.log(`firstObject = ${firstObject}`);

//1) for ... in loop method 
//EXAMPLE 
const secondObject = {};

for (let key in firstObject){
secondObject[key] = firstObject[key];
}
console.log(`secondObject = ${secondObject}`);

//2) Object.assign() method 
//EXAMPLE
const thirdObject = Object.assign( {Abia:Umuahia, Adamawa: Yola}, firstObject)
console.log(`thirdObject = ${thirdObject}`);

//3) Spread Operator Method
//EXAMPLE
const fourthObject = {... firstObject}
console.log(`fourthObject = ${fourthObject}`);

// Question 5: As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 	’Omoyele Sowore is the presidential candidate of AAC’

for(let key in presidentialCandidates){
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
}
