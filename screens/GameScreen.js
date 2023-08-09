import { Text, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomNumber(min, max, userGuessedNum) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === userGuessedNum) {
    return generateRandomNumber(min, max, userGuessedNum);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userGuessedNum }) {
  const initGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userGuessedNum
  );
  const [currentGuess, setCurrentGuess] = useState(initGuess);

  console.log(userGuessedNum);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userGuessedNum) ||
      (direction === "greater" && currentGuess > userGuessedNum)
    ) {
      Alert.alert("wrong guess. please give a correct guess.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.warn(minBoundary, maxBoundary);
    const newNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Current Guessed Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Is the number too high or too lower?</Text>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          +
        </PrimaryButton>
      </View>
      <Text>Load rounds</Text>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
});
