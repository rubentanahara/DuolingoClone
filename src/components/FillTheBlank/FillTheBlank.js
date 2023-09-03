import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import WordOption from "../WordOption";
import styles from "./styles";

const FillTheBlank = ({ question, onCorrectAnswer, onIncorrectAnswer }) => {
  const [parts, setParts] = useState(question.parts);

  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrectAnswer();
    } else {
      onIncorrectAnswer();
    }
  };

  const checkIfCorrect = () => {
    return (
      parts.filter((part) => part.isBlank && part.selected !== part.text)
        .length === 0
    );
  };

  const addOptionToSelected = (option) => {
    if (isSelected(option)) {
      return;
    }

    const newParts = [...parts];
    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        break;
      }
    }
    setParts(newParts);
  };

  const removeSelectedAt = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const isSelected = (option) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };

  const isReadyToCheck = () => {
    return parts.filter((part) => part.isBlank && !part.selected).length > 0;
  };
  console.log(question.options);
  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        {parts.map((part, index) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank}>
                {part.selected && (
                  <WordOption
                    word={part.selected}
                    onPress={() => removeSelectedAt(index)}
                  />
                )}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            word={option}
            isSelected={isSelected(option)}
            onPress={() => addOptionToSelected(option)}
          />
        ))}
      </View>

      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={isReadyToCheck()}
      />
    </>
  );
};

export default FillTheBlank;
