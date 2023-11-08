import { BehaviorSubject } from "rxjs";
import Operator from "../models/Operator";

class CalculatorState {
  valueObservable = new BehaviorSubject<string | null>(null);
  operatorObservable = new BehaviorSubject<Operator | null>(null);
  inputValueObservable = new BehaviorSubject<string | null>(null);

  public get value() {
    return this.valueObservable.value;
  }

  public set value(value: string | null) {
    this.valueObservable.next(value);
  }

  public get operator() {
    return this.operatorObservable.value;
  }

  public set operator(operator: Operator | null) {
    this.operatorObservable.next(operator);
  }

  public get inputValue() {
    return this.inputValueObservable.value;
  }

  public set inputValue(value: string | null) {
    this.inputValueObservable.next(value);
  }
}

export default new CalculatorState();
