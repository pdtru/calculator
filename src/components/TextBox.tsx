import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Text } from "react-native";

const TextBox = ({ text }: { text: string }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={{ fontFamily: "Poppins_400Regular" }}>{text}</Text>;
};

export default TextBox;
