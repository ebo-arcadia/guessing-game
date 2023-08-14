import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onGuessedNum }) {
  const [enteredNum, setEnteredNum] = useState("");

  function inputTextHandler(userInput) {
    setEnteredNum(userInput);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  function confirmInputHandler() {
    const guessedNum = parseInt(enteredNum);
    if (isNaN(guessedNum) || guessedNum <= 0 || guessedNum > 99) {
      Alert.alert("Invalid input number", "number must between 0 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onGuessedNum(guessedNum);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>What is my number?</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.playInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputTextHandler}
          value={enteredNum}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Row!</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  playInput: {
    height: 30,
    width: 50,
    fontSize: 30,
    borderBottomColor: Colors.SecondaryYellow,
    borderBottomWidth: 3,
    color: Colors.SecondaryYellow,
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
