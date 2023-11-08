import { View, Button } from "react-native";
import CalculatorController from "../controllers/CalculatorController";
import Operator from "../models/Operator";

const OperatorButton = ({ operator }: { operator: Operator }) => {
  const onPress = () => {
    CalculatorController.calculate(operator);
  };

  return (
    <View>
      <Button onPress={onPress} title={operator} />
    </View>
  );
};

export default OperatorButton;
