import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
  // props and methods
  name: string;
  totalCapacityKg: number;
  cargoItems: any[];
  astronauts: any[];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    let sum: number = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].massKg;
    }
    return sum;
  }
  currentMassKg(): number {
    let astroMass = this.sumMass(this.astronauts);
    let cargoMass = this.sumMass(this.cargoItems);
    return astroMass + cargoMass;
  }
  canAdd(item: Payload): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true;
    }
  }
  addCargo(cargo: Cargo) {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }
  addAstronaut(astronaut: Astronaut) {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
