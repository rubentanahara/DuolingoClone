import React from "react";
import { StyleSheet, View } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: 20,
    backgroundColor: "lightgrey",
    borderRadius: 15,
    flex: 1,
  },
  fg: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#FAC800",
  },
  highlight: {
    backgroundColor: "#FAD131",
    width: "90%",
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default ProgressBar;
