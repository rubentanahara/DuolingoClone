import PropTypes from "prop-types";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../Button";
import ImageOption from "../ImageOption";
import styles from "./styles";

const ImageMultipleChoiceQuestion = ({
  question,
  onCorrectAnswer,
  onIncorrectAnswer,
}) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected?.correct) {
      onCorrectAnswer();
      setSelected(null);
      return;
    }
    onIncorrectAnswer();
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={option.id === selected?.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check!" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        correct: PropTypes.bool,
      }),
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
