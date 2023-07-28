import { TextInput, View, StyleSheet, Alert, Button } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredNum, setEnteredNum] = useState("");

  function inputTextHandler(userInput) {
    setEnteredNum(userInput);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  function confirmInputHandler() {
    const parsedInputNum = parseInt(enteredNum);
    if (isNaN(parsedInputNum) || parsedInputNum <= 0 || parsedInputNum > 99) {
      Alert.alert("Invalid input number", "number must between 0 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    console.info("valid input number!");
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
    backgroundColor: "#72063c",
    borderRadius: 10,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 7,
    shadowOpacity: 0.9,
  },
  playInput: {
    height: 30,
    width: 50,
    fontSize: 30,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 3,
    color: "#ddb52f",
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
