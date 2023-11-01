let car = "Fiat"; //defined value to car variable .

const car = {
    type: "Vegnar",
    model: "500",
    color: "white"

};


const person = {
    firstName: "JOhn",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


const person1 = {
    firstName: "Riya",
    lastName: "gupta",
    id: 101,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// in object method , this refers to the object.
//this refer to the global object {alone as well as in function}

// call(), apply() and Bind () can refer this to any Object


// cannot chnage the value of this


///xyz
.......