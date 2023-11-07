import { View, Button } from "react-native";
import CalculatorState from "../stores/CalculatorState";
import CalculatorController from "../controllers/CalculatorController";

const NumberButton = ({ value }: { value: string }) => {
  const onPress = () => {
    CalculatorController.handleNumber(value);
  };

  return (
    <View>
      <Button onPress={onPress} title={value} />
    </View>
  );
};

export default NumberButton;
