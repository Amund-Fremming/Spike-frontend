import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mascotContainer: {
    position: "absolute",
    top: -250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    top: -40,
  },
});

const imageStyle = StyleSheet.create({
  mascot: {
    width: 330,
    height: 330,
  },
});

export { styles, imageStyle };