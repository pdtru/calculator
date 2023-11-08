import Operator from "../models/Operator";
import CalculatorState from "../stores/CalculatorState";

abstract class CalculatorController {
  public static calculate = (operator: Operator) => {
    if (CalculatorState.value != null && CalculatorState.inputValue != null) {
      switch (CalculatorState.operator) {
        case Operator["+"]:
          CalculatorState.value = (
            Number(CalculatorState.value) + Number(CalculatorState.inputValue)
          ).toString();
          break;
        case Operator["-"]:
          CalculatorState.value = (
            Number(CalculatorState.value) - Number(CalculatorState.inputValue)
          ).toString();
          break;
        case Operator["/"]:
          CalculatorState.value = (
            Number(CalculatorState.value) / Number(CalculatorState.inputValue)
          ).toString();
          break;
        case Operator["*"]:
          CalculatorState.value = (
            Number(CalculatorState.value) * Number(CalculatorState.inputValue)
          ).toString();
          break;
      }
    } else {
      CalculatorState.value = CalculatorState.inputValue;
    }
    CalculatorState.operator = operator;
    CalculatorState.inputValue = null;
  };

  public static executeEqual = () => {
    if (
      CalculatorState.inputValue != null &&
      CalculatorState.inputValue != "" &&
      CalculatorState.operator != null
    )
      this.calculate(CalculatorState.operator);
  };

  public static executeClear = () => {
    CalculatorState.value = "";
    CalculatorState.operator = null;
    CalculatorState.inputValue = "";
  };

  public static executeDelete = () => {};

  public static handleNumber = (value: string) => {
    if (CalculatorState.inputValue != null) {
      CalculatorState.inputValue += value;
    } else {
      CalculatorState.inputValue = value;
    }
  };
}

export default CalculatorController;
