import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.PrimaryYellow,
    padding: 23,
    margin: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.PrimaryYellow,
    fontSize: 30,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
