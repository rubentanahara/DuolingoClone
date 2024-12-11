import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import styles from "./App.styles";
import questions from "./assets/data/allQuestions";
import FillTheBlank from "./src/components/FillTheBlank/FillTheBlank";
import Header from "./src/components/Header/Header";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState(
        questions[currentQuestion],
    );
    const [lives, setLives] = useState(5);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (currentQuestion >= questions.length) {
            alert('Ymu have finished the quiz!')
            setLives(5);
            setCurrentQuestion(0);
            return;
        }
        setSelectedQuestion(questions[currentQuestion]);
    }, [currentQuestion]);

    // load data from async storage
    useEffect(() => {
        LoadData();
    }, []);
    // save data to async storage
    useEffect(() => {
        if (!hasLoaded) {
            return;
        }
        SaveData();
    }, [lives, currentQuestion, hasLoaded]);

    const onCorrectAnswer = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setLives(5);
    };

    const onIncorrectAnswer = () => {
        if (lives <= 1) {
            alert("Game Over!", "Try again!");
            restartQuiz();

            return;
        }
        alert("Incorrect!");
        setLives(lives - 1);
    };

    const SaveData = async () => {
        await AsyncStorage.setItem("lives", lives.toString());
        await AsyncStorage.setItem("currentQuestion", currentQuestion.toString());
    };

    const LoadData = async () => {
        const lives = await AsyncStorage.getItem("lives");
        const currentQuestion = await AsyncStorage.getItem("currentQuestion");
        if (lives === null || currentQuestion === null) {
            return;
        }
        setLives(parseInt(lives));
        setCurrentQuestion(parseInt(currentQuestion));
        setHasLoaded(true);
    };
    // if (!hasLoaded) {
    //     return (
    //         <ActivityIndicator size="large" style={{ flex: 1 }} color="#FAD131" />
    //     );
    // }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header progress={currentQuestion / questions.length} lives={lives} />
                {selectedQuestion.type === "FILL_THE_BLANK" && (
                    <FillTheBlank
                        question={selectedQuestion}
                        onCorrectAnswer={onCorrectAnswer}
                        onIncorrectAnswer={onIncorrectAnswer}
                    />
                )}
                {selectedQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
                    <ImageMultipleChoiceQuestion
                        question={selectedQuestion}
                        onCorrectAnswer={onCorrectAnswer}
                        onIncorrectAnswer={onIncorrectAnswer}
                    />
                )}

                {selectedQuestion.type === "OPEN_ENDED" && (
                    <OpenEndedQuestion
                        question={selectedQuestion}
                        onCorrectAnswer={onCorrectAnswer}
                        onIncorrectAnswer={onIncorrectAnswer}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default App;
