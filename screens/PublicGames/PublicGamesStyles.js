import { StyleSheet } from "react-native";
import { verticalScale } from "../../styles/Dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#0E0E10",
    alignItems: "center",
  },

  spinnerStyles: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingBottom: verticalScale(250),
    backgroundColor: "#0E0E10",
  },
});

export { styles };
