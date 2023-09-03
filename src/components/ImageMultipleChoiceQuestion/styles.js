import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
    textAlign: "center",
    marginBottom: 10,
  },
  optionsContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default styles;
