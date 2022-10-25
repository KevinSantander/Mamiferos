import { Mammals } from "./classMammals";

export class Herbivorous extends Mammals {
  

  public constructor(pName: string, pEat: string, pPaws: number, pDisplace: number) {
    super(pName, pEat, pPaws, pDisplace)
  }

  public setMaximumSpeed(paramDesplace: number): void {
       this.displace_KM = paramDesplace;
  }

}