import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState, useMemo } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import Colors from "../constants/colors";
import GuessLog from "../components/GuessLog";

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

function GameScreen({ userNumber, onGameIsOver }) {
  const initGuess = useMemo(
    () => generateRandomNumber(minBoundary, maxBoundary, userNumber),
    [currentGuess]
  );
  generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  const [guessRounds, setGuessRounds] = useState([initGuess]);
  const guessRoundListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameIsOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameIsOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  console.info("current guess", currentGuess);
  console.info("user number", userNumber);
  console.info(minBoundary, maxBoundary);

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
    setGuessRounds((previousGuessedRounds) => [
      newNumber,
      ...previousGuessedRounds,
    ]);
  }

  return (
    <View style={styles.screen}>
      <Title>Current Guessed Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Is the number too high or too lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <FontAwesome name="arrow-down" size={24} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <FontAwesome name="arrow-up" size={24} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logItemContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(data) => (
            <GuessLog
              roundNumber={guessRoundListLength - data.index}
              guessedNumber={data.item}
            />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 20,
    color: Colors.PrimaryRed,
  },
  logItemContainer: {
    flex: 1,
    padding: 10,
  },
});
