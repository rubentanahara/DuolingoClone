import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../../components/Button";

const OpenEndedQuestion = ({
  question,
  onCorrectAnswer,
  onIncorrectAnswer,
}) => {
  const [answer, setAnswer] = useState("");

  onPressButton = () => {
    if (question.answer.toLowerCase().trim() === answer.toLowerCase().trim()) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }
    setAnswer("");
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image style={styles.mascot} source={mascot} />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={answer}
        style={styles.textInput}
        placeholder="type in english"
        multiline
        numberOfLines={100}
        onChangeText={setAnswer}
      />
      <Button title="Submit" disabled={!answer} onPress={onPressButton} />
    </>
  );
};

export default OpenEndedQuestion;
