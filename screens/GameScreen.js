import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";

function generateRandomNumber(min, max, userGuessedNum) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === userGuessedNum) {
    return generateRandomNumber(min, max, userGuessedNum);
  } else {
    return randomNumber;
  }
}

function GameScreen(props) {
  const initGuess = generateRandomNumber(1, 100, props.enteredNum);
  const [currentGuess, setCurrentGuess] = useState(initGuess);

  return (
    <View style={styles.screen}>
      <Title>Current Guessed Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Is it too high or too lower? + / -</Text>
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
