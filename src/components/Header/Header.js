import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import heart from "../../../assets/images/heart.png";
import ProgressBar from "../ProgressBar";

const Header = ({ progress, lives }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />

            <Image source={heart} style={styles.icon} resizeMode="contain" />
            <Text style={styles.lives}> {lives}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        height: 30,
        width: 30,
        marginHorizontal: 5,
    },
    lives: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
    },
});

export default Header;
