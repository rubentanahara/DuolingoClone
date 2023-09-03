import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",

    margin: 10,
    marginBottom: -10,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    resizeMode: "contain",
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    fontSize: 16,
    backgroundColor: "#EBEBEB",
    alignSelf: "stretch",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    borderRadius: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
    margin: 10,
    textAlignVertical: "top",
  },
});

export default styles;
