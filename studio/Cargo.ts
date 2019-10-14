import { Payload } from "./Payload";
export class Cargo implements Payload {
  // props and methods
  massKg: number;
  material: string;
  constructor(massKg: number, material: string) {
    this.massKg = massKg;
    this.material = material;
  }
}
