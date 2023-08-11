import { Text, View, StyleSheet, Alert, Button } from "react-native";
import { useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomNumber(min, max, userNumber) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === userNumber) {
    return generateRandomNumber(min, max, userNumber);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const initGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  console.log("current guessed num: ", currentGuess);
  console.log("current user num: ", userNumber);

  function nextGuessHandler(direction) {
    if (direction === "lower" && currentGuess < userNumber) {
      Alert.alert("Wrong Direction!", "Needs to guess higher", [
        { text: "Try again", style: "cancel" },
      ]);
      return;
    }
    if (direction === "higher" && currentGuess > userNumber) {
      Alert.alert("Wrong Direction!", "Needs to guess lower", [
        { text: "Try again", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    }
    if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }

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
