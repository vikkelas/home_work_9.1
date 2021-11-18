/* eslint-disable linebreak-style */
import Characters from './Character';

export default class MathCharacter extends Characters {
  get stoned() {
    return this.stonedParametr;
  }

  set stoned(value) {
    this.stonedParametr = value;
  }

  get attack() {
    function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }
    if (this.stoned === true) {
      this.attackParametr = (100 - (this.distance - 1) * 10) - (getBaseLog(2, this.distance) * 5);
      return this.attackParametr;
    }
    this.attackParametr = 100 - (this.distance - 1) * 10;
    return this.attackParametr;
  }

  set attack(value) {
    this.attackParametr = value;
    return this.attackParametr;
  }
}
