export class Mammals {
  private name: string
  protected eat: string;
  private paws: number;
  protected displace_KM: number;

  public constructor(pName: string, pEat: string, pPaws: number, pDisplace: number) {
    this.name = pName;
    this.eat = pEat;
    this.paws = pPaws;
    this.displace_KM = pDisplace;
  }

  public getName(): string {
    return this.name;
  }

  public setName(paramName: string): void {
    this.name = paramName;
  }

  public getEat(): string {
    return this.eat;
  }

  public setEat(paramEat: string): void {
    this.eat = paramEat
  }

  public getMaximumSpeed(): number {
    return this.displace_KM
  }

  public setMaximumSpeed(paramDesplace: number): void {
    this.displace_KM = paramDesplace;
  }

  public getPaws(): number {
    return this.paws;
  }

  public setPaws(paramPaws: number): void {
    this.paws = paramPaws;
  }
}