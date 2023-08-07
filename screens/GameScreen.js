import { Text, View, StyleSheet, Button } from "react-native";
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

function GameScreen(props) {
  const initGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    props.enteredNum
  );
  const [currentGuess, setCurrentGuess] = useState(initGuess);

  function nextGuessHandler(direction) {
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
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
        <Button
          title="-"
          onPress={nextGuessHandler.bind(this, "lower")}
        ></Button>
        <Button
          title="+"
          onPress={nextGuessHandler.bind(this, "higher")}
        ></Button>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        ;
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
