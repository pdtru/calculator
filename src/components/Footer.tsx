import { View, Text, Pressable } from "react-native";
import Linking from "expo-linking";
import { FontAwesome } from "@expo/vector-icons";
import TextBox from "./TextBox";

const openGithub = () => {
  Linking.openURL("https://github.com/pdtru");
};

const Footer = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextBox text="Copyright © 2023 pdtru " />
      <Pressable onPress={openGithub}>
        <FontAwesome name="github" size={24} color="#6c5292" />
      </Pressable>
    </View>
  );
};

export default Footer;
