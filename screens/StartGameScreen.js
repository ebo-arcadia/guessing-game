import { TextInput, View, StyleSheet, Alert, Button } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

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
    <View style={styles.inputContainer}>
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
          <Button title="row!!!"></Button>
          <PrimaryButton onPress={confirmInputHandler}>Row!</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: Colors.DarkRed,
    borderRadius: 10,
    elevation: 8,
    shadowColor: Colors.PrimaryBlack,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 7,
    shadowOpacity: 0.9,
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
