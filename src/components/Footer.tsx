import { View, Pressable } from "react-native";
import Linking from "expo-linking";
import { FontAwesome } from "@expo/vector-icons";
import TextBox from "./TextBox";
import { useState, useEffect } from "react";
import AppState from "../stores/AppState";

const openGithub = () => {
  Linking.openURL("https://github.com/pdtru");
};

const Footer = () => {
  const [isHovered, setIsHovered] = useState(AppState.hoveredIcon);

  useEffect(() => {
    const hoveredIconSubscription =
      AppState.hoveredIconObservable.subscribe(setIsHovered);

    return () => {
      hoveredIconSubscription.unsubscribe();
    };
  }, []);

  const onHoverIn = () => {
    setIsHovered(true);
  };
  const onHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextBox text="Copyright © 2023 pdtru " />
      <Pressable
        onPress={openGithub}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
      >
        <FontAwesome
          name="github"
          size={24}
          color={isHovered ? "#9d78d2" : "#6c5292"}
        />
      </Pressable>
    </View>
  );
};

export default Footer;
