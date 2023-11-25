import PropTypes from "prop-types";
import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      style={[styles.container, disabled && styles.disabledContainer]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{text}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: "Click me!",
  onPress: () => {},
};

export default Button;
