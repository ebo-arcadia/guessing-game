import { View, Image, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen(props) {
  [roundsNumber, userNumber, onStartANewGame] = [
    props.roundsNumber,
    props.userNumber,
    props.onStartANewGame,
  ];
  return (
    <View style={styles.rootContainer}>
      <Title>The Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        <Text style={styles.highlight}>{roundsNumber}</Text> rounds are needed
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartANewGame}>Start a New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.PrimaryBlue,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 22,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.PrimaryGreen,
  },
});
