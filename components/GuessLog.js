import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function GuessLog(props) {
  [roundNumber, guessedNumber] = [props.roundNumber, props.guessedNumber];
  return (
    <View style={styles.logItem}>
      <Text style={styles.logItemText}>Round: {roundNumber}</Text>
      <Text style={styles.logItemText}>Guessed: {guessedNumber}</Text>
    </View>
  );
}

export default GuessLog;

const styles = StyleSheet.create({
  logItem: {
    borderColor: Colors.PrimaryYellow,
    borderWidth: 1,
    borderRadius: 30,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.PrimaryBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  logItemText: {
    fontFamily: "open-sans",
    color: Colors.PrimaryYellow,
  },
});
