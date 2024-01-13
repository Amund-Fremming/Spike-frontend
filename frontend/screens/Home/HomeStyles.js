import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Containers
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#342359",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: "100%",
    position: "absolute",
    top: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  mascotContainer: {
    position: "absolute",
    top: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  // Background Circles
  layerOneCircle: {
    width: 850,
    height: 800,
    top: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#43367C",
  },

  layerTwoCircle: {
    width: 850,
    height: 800,
    top: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#604395",
  },

  layerThreeCircle: {
    width: 850,
    height: 800,
    top: 150,
    paddingTop: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#A66444",
    borderWidth: 4,
    borderColor: "black",
  },

  // Planet View Containers
  planetOne: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  planetTwo: {
    width: 150,
    height: 150,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  planetThree: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  // Text
  textShadow: {
    width: "25%",
    height: "19%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    borderRadius: 10,
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "italic",
    color: /*"#07BF7B"*/ "white",
  },

  // Stars
  stars: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "20%",
  },
});

const imageStyle = StyleSheet.create({
  planetOne: {
    width: 120,
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },

  planetTwo: {
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },

  planetThree: {
    width: 80,
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },

  mascot: {
    width: 330,
    height: 330,
  },

  starOne: {
    position: "absolute",
    width: 15,
    height: 10,
    top: 300,
    left: 30,
  },

  starTwo: {
    position: "absolute",
    width: 10,
    height: 5,
    top: 320,
    left: 45,
  },

  starThree: {
    position: "absolute",
    width: 12,
    height: 8,
    top: 340,
    left: 25,
  },

  starFour: {
    position: "absolute",
    width: 15,
    height: 15,
    top: 270,
    right: 30,
  },

  starFive: {
    position: "absolute",
    width: 15,
    height: 10,
    top: 320,
    right: 65,
  },

  starSix: {
    position: "absolute",
    width: 8,
    height: 5,
    top: 340,
    right: 35,
  },
});

export { styles, imageStyle };
