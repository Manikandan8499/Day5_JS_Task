//Q3. Person class

class Person {
    constructor(name,age,gender,height,educated){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height= height;
        this.educated = educated;
    }
     getpersonname(){
        console.log(`Person name ${this.name}`);
     }
     getpersonage(){
        console.log(`${this.name} age is ${this.age}`);
     }
     getpersonHeight(){
        console.log(`${this.name} is ${this.height} height`);
     }
     getpersoneducated(){
        console.log(`${this.name} is ${this.educated} person`);
     }
     displaydetails(){
        console.log(`
        Name of the Person is ${this.name} and age is ${this.age} years old.
        Height is ${this.height} and ${this.educated}.
        `);
     }
}
const persondetail = new Person("mani",24,"male",5.6,"educated");
persondetail.displaydetails();


//Q4 . Calculate Uber Price:

class UberPriceCalculator{
    constructor(distance,time){
        this.distance = distance;
        this.time = time;
    }
    calculatePrice(){
        const Price =(this.distance * 5.0) +(this.time * 0.5);
        console.log(`Uber price for ${this.distance} Km is ${Price}`);
    }
}

const calculate = new UberPriceCalculator(5,15);
calculate.calculatePrice();

//Q1 . Movie class

class Movie{
   constructor(title,studio,rating){
      this.title = title;
      this.studio = studio;
      this.rating = rating || "PG";
   }
      static getPG(movies){
               return movies.filter(movie =>movie.rating === "PG" );
      }
      displayMoviedetails(){
         console.log(` 
         Movie Title: ${this.title}
         studio name: ${this.studio}
         Rating: ${this.rating}
         `)
      }
   }
const movies = [
   new Movie("Movie 1", "Studio 1", "PG"),
   new Movie("Movie 2", "Studio 2", "PG­13"),
   new Movie("Movie 3", "Studio 3", "R"),
];
const pgMovies = Movie.getPG(movies);
console.log("PG Rated Movies:", pgMovies);
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
casinoRoyale.displayMoviedetails();


//Q2. class circle

class Circle{
   constructor(radius, color){
      this.radius = radius;
      this.color = color;
   }
   getRadius(){
      console.log(`Radius of the Circle: ${this.radius}`);
   }
   setRadius(radius){
      this.radius =radius;
      console.log(`Updated Radius of the Circle: ${this.radius}`);
   }
   getColor()
   {
      console.log(`Color of the Circle: ${this.color}`);
   }
   setColor(color)
   {
      this.color = color;
      console.log(`Updated color of the circle: ${this.color}`);
   }
   toString(){
      console.log(`Given Circle radius is ${this.radius} and color is ${this.color}`);
   }
   getArea()
   {
      const Area = Math.PI * this.radius * this.radius ;
      console.log(`Area of the circle is ${Area}`);
   }
    getCircumference(){
      const circumference = 2 * Math.PI * this.radius;
      console.log(`Circumference of the Circle is ${circumference}`);
    }
}

const myCircle = new Circle(1.0,"blue");
myCircle.getRadius();
myCircle.setRadius(3.0);
myCircle.setColor("green");
console.log(myCircle.toString());