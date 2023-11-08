import { View, Button } from "react-native";
import CalculatorController from "../controllers/CalculatorController";
import Operator from "../models/Operator";

const EqualButton = () => {
  const onPress = () => {
    CalculatorController.executeEqual();
  };

  return (
    <View>
      <Button onPress={onPress} title={Operator["="]} />
    </View>
  );
};

export default EqualButton;
