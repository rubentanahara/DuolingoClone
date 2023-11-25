import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderBottomWidth: 4,
        borderColor: "lightgray",
        borderWidth: 2,
        borderRadius: 10,
        width: "50%",
        height: "50%",
        alignItems: "center",
    },
    optionImage: {
        flex: 1,
        width: "100%",
    },
    optionText: {
        fontWeight: "bold",
        padding: 10,
        color: "black",
    },
    selectedContainer: {
        backgroundColor: "#DDF4FE",
        borderColor: "#81D5Fe",
    },
    selectedText: {
        fontWeight: "bold",
        color: "#40BEF7",
    },
});

export default styles;
