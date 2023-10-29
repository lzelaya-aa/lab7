var myObject = {
    property1: "Hello",
    property2: "World",
    property3: "See you next time",

    method1: function() {
        // Output using document.write()
        document.write("<p>Method 1: " + this.property1 + " " + this.property2 + "</p>");
    },

    method2: function() {
        // Output using alert()
        alert("Method 2: Doctor Who once said: " + this.property3);
    }
};

function runObjectMethods() {
    // Create an instance of the object
    var instance = Object.create(myObject);

    // Set properties of the instance
    instance.property1 = "Goodbye";
    instance.property2 = "World";
    instance.property3 = "'The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things or make them unimportant.'";

    // Call methods of the instance
    instance.method1();
    instance.method2();
}
    