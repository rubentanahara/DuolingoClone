import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#58CC02",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    borderColor: "white",
  },
  disabledContainer: {
    backgroundColor: "lightgray",
    borderColor: "gray",
  },
});

export default styles;
