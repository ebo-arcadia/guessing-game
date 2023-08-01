import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Colors.DarkRed }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.PrimaryGreen,
    paddingVertical: 16,
    paddingHorizontal: 20,
    elevation: 4,
  },
  buttonText: {
    color: Colors.PrimaryWhite,
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
