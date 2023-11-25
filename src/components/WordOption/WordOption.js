import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const WordOption = ({ word, onPress, isSelected }) => {
  return (
    <Pressable
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgray" : "white" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: isSelected ? "lightgray" : "black",
          },
        ]}
      >
        {word}
      </Text>
    </Pressable>
  );
};

export default WordOption;
