import { View, Text, Pressable } from "react-native";
import Linking from "expo-linking";
import { FontAwesome } from "@expo/vector-icons";

const openGithub = () => {
  Linking.openURL("https://github.com/pdtru");
};

const Footer = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <Text>Copyright © 2023 pdtru</Text>
      <Pressable onPress={openGithub}>
        <FontAwesome name="github" size={24} color="purple" />
      </Pressable>
    </View>
  );
};

export default Footer;
