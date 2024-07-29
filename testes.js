class Car{
 constructor (model, year, fit, id) {
  this.model = model;
  this.year = year;
  this.fit = fit;
  this.id = id;
  console.log("Um carro foi adicionado")
  Car.instancecount++;
  };
}
Car.instancecount = 0


let car1 = new Car("Toyota", 2020, 100000,1);
let car2 = new Car("Honda", 2019, 254222,2);
let car3 = new Car("Chevrolet",2023, 24524452,3);
let car4 = new Car("Volvo",2022, 2434524452,4);
let car5 = new Car("Audi",2024,326436423,5)
let lista = []
lista.push(car1,car2,car3,car4,car5)

console.log(lista[1])
console.log(Car.length)
console.log(car1,car2,car3,car4,car5) 
console.log(Car)
