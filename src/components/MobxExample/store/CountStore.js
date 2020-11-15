import {
  makeObservable, observable, action, computed,
} from 'mobx';

class CountStore {
  number = 10;

  constructor() {
    makeObservable(this, {
      number: observable,
      getDoubleCount: computed,
      onIncrement: action,
      // onDecrement: action,
    });
  }

  get getDoubleCount() {
    return this.number * 2;
  }

  onIncrement =() => {
    this.number += 1;
  }

  onDecrement =() => {
    this.number -= 1;
  }
}
export default CountStore;
