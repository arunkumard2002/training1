// today we are going to discuss about the objects.
let person = {};
person.name = 'Arun';
person.tutorial = 123;
person['concept'] = 'Object';
person.training = ['HTML', 'css', 'js'];
person.whatTutorial = function() {
    debugger;
    console.log(this);
    return `${this.tutorial} tutorial given by ${this.name}`; 
}
person.fullname = function() {
    return this.name; 
}
let person1 = {
    name : 'Rajeev',
    tutorial : 'HTML',
    concept : 'Course',
    training : ['HTML', 'css', 'js']
}

let add = function(a,b) {
    debugger;
    console.log(this);
    return a + b;
}
add(1,2);

