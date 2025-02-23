// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  frontWheel: Wheel;
  rearWheel: Wheel;

  // Constructor for the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    frontWheel: Wheel,
    rearWheel: Wheel,
  ) {
    // Call the constructor of the parent class, Vehicle
    super();
    
    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.frontWheel = frontWheel || new Wheel();
    this.rearWheel = rearWheel || new Wheel();
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(
      `Front Wheel: ${this.frontWheel.getDiameter} inch with a ${this.frontWheel.getTireBrand} tire`
    );
    console.log(
      `Rear Wheel: ${this.rearWheel.getDiameter} inch with a ${this.rearWheel.getTireBrand} tire`
    );
  }
}

export default Motorbike;
