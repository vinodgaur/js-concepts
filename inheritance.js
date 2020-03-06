function Animal(color){
  this.color=color;
}

Animal.prototype.getColor=function(){
  console.log("from animal=",this.color);
}

var a= new Animal("green");
a.getColor();

function Dog(name,color){
  Animal.call(this,color);
  this.name=name;
}

Dog.prototype=Object.create(Animal.prototype);

Dog.prototype.getNameColor=function(){
  console.log("from dog=",this.name, this.color);
}

Dog.prototype.getColor=function(){
  console.log("from dog", this.color);
}

var d = new Dog("tiger","red");
d.getNameColor();
d.getColor();

Object.defineProperty(Dog.prototype, 'constructor', {
  value:Dog,
  enumerable:false,
  writable:true
});
//Dog.prototype.constructor=Dog;

//console.log("dog constructor=",Dog.prototype.constructor);


//For more detail: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
