import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
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
});
