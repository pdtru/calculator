import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CalculatorState from "../stores/CalculatorState";
import NumberButton from "./NumberButton";
import EqualButton from "./EqualButton";
import OperatorButton from "./OperatorButton";
import Operator from "../models/Operator";
import ClearButton from "./ClearButton";
import DeleteButton from "./DeleteButton";

const Calculator = () => {
  const [value, setValue] = useState(CalculatorState.value);
  const [operator, setOperator] = useState(CalculatorState.operator);
  const [inputValue, setInputValue] = useState(CalculatorState.inputValue);

  useEffect(() => {
    const valueSubscription =
      CalculatorState.valueObservable.subscribe(setValue);
    const operatorSubscription =
      CalculatorState.operatorObservable.subscribe(setOperator);
    const inputValueSubscription =
      CalculatorState.inputValueObservable.subscribe(setInputValue);

    return () => {
      valueSubscription.unsubscribe();
      operatorSubscription.unsubscribe();
      inputValueSubscription.unsubscribe();
    };
  }, []);

  return (
    <View
      style={{
        display: "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>{value}</Text>
        <Text style={{ flexDirection: "row" }}>
          {inputValue}
          {operator}
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <ClearButton />
          <DeleteButton />
          <OperatorButton operator={Operator["/"]} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <NumberButton value={"7"} />
          <NumberButton value={"8"} />
          <NumberButton value={"9"} />
          <OperatorButton operator={Operator["*"]} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <NumberButton value={"4"} />
          <NumberButton value={"5"} />
          <NumberButton value={"6"} />
          <OperatorButton operator={Operator["-"]} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <NumberButton value={"1"} />
          <NumberButton value={"2"} />
          <NumberButton value={"3"} />
          <OperatorButton operator={Operator["+"]} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <NumberButton value={"."} />
          <NumberButton value={"0"} />
          <EqualButton />
        </View>
      </View>
    </View>
  );
};

export default Calculator;
