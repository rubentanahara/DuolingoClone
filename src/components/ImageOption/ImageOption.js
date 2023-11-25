import PropTypes from "prop-types";
import React from "react";
import { Image, Pressable, Text } from "react-native";
import styles from "./styles";

const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{ uri: image }}
        resizeMode="center"
        style={styles.optionImage}
      />
      <Text
        style={[
          styles.optionText,
          isSelected ? styles.selectedText : styles.optionText,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};
ImageOption.defaultProps = {
  image:
    "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
  text: "la taza",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
