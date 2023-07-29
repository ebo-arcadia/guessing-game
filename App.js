import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  [userGuessedNum, setUserGuessedNum] = useState();

  function userGuessedNumHandler(guessedNum) {
    setUserGuessedNum(guessedNum);
  }

  screen = <StartGameScreen onGuessedNum={userGuessedNumHandler} />;

  if (userGuessedNum) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["yellow", "red"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
