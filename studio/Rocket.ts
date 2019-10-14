import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
export class Rocket {
  // props and methods
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[];
  astronauts: Astronaut[];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    return;
  }
}
