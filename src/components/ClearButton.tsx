import { View, Button } from "react-native";
import CalculatorController from "../controllers/CalculatorController";

const ClearButton = () => {
  const onPress = () => {
    CalculatorController.executeClear();
  };

  return (
    <View style={{ flex: 2 }}>
      <Button onPress={onPress} title="CLEAR" />
    </View>
  );
};

export default ClearButton;
