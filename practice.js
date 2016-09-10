//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
var answer1 = "The 'this' keyword is utilizing object types to reference the object being called like a pronoun. For example, if we call 'var brock = {name: \"brock\"};' and utilize his name in a method within the brock object(implicit), 'this' would be a great way to call the name inside the method so that it can be used in when any var is called (granted they have the same method)"
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
var answer2a = "Implicit: Implicit is utilizing 'this' inside the object itself.";
var answer2b = "Explicit: utilizes prototype methods (call, apply, bind(doesn't call but returns the function for a later call)) of a function to attach an object to the function so that 'this' can be referenced from the function call.";
var answer2c = "new Binding: when using a constructor function to create new objects, 'this' refers automatically to the new variable being called";
var answer2d = "window Binding: if using Explicit binding, defaults to the window object (usually we don't want this)";
  // 3) What is the difference between call and apply?

      //Answer
var answer3 = "call will accept individual arguments; apply will accept arrays/objects";
  // 4) What does .bind do?

      //Answer
var answer4 = ".bind will return but not invoke the function and parameters so that it can be assigned and invoked later";

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "broccolihero",
  email: "broccolihero@notreallyanemail.com",
  getUsername: function(){
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
    return this.move += 10;
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);
//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

// var userName = getMyUsername(); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
var answer5 = undefined;
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
var answer6 = window;
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
var userName = getMyUsername.call(myUser);
