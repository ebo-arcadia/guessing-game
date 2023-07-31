import { Text, View, StyleSheet } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Your guessed number</Text>
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
