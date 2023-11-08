import { View, Pressable } from "react-native";
import CalculatorController from "../controllers/CalculatorController";
import { Feather } from "@expo/vector-icons";

const DeleteButton = () => {
  const onPress = () => {
    CalculatorController.executeDelete();
  };

  return (
    <Pressable onPress={onPress}>
      <Feather name="delete" size={24} color="black" />
    </Pressable>
  );
};

export default DeleteButton;
