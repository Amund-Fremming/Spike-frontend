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
    backgroundColor: "#8AA9C4",
    borderWidth: 4,
    borderColor: "black",
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
  },

  // Stars
  stars: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "20%",
  },

  // Dots
  dots: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
  },
});

const imageStyle = StyleSheet.create({
  loadingImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

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

  starSeven: {
    position: "absolute",
    width: 10,
    height: 9,
    top: 60,
    right: 30,
  },

  starEight: {
    position: "absolute",
    width: 11,
    height: 8,
    top: 75,
    right: 120,
  },

  starNine: {
    position: "absolute",
    width: 15,
    height: 10,
    top: 90,
    right: 80,
  },

  starTen: {
    position: "absolute",
    width: 12,
    height: 8,
    top: 120,
    left: 30,
  },

  starEleven: {
    position: "absolute",
    width: 9,
    height: 9,
    top: 145,
    left: 120,
  },

  starTwelve: {
    position: "absolute",
    width: 15,
    height: 10,
    top: 200,
    left: 80,
  },

  starThirteen: {
    position: "absolute",
    width: 15,
    height: 10,
    top: 70,
    left: 60,
  },

  starFourteen: {
    position: "absolute",
    width: 10,
    height: 7,
    top: 90,
    left: 120,
  },

  starFifteen: {
    position: "absolute",
    width: 10,
    height: 5,
    top: 100,
    left: 20,
  },

  starSixteen: {
    position: "absolute",
    width: 15,
    height: 10,
    top: 200,
    left: 150,
  },

  starSeventeen: {
    position: "absolute",
    width: 11,
    height: 7,
    top: 180,
    left: 250,
  },

  starEighteen: {
    position: "absolute",
    width: 8,
    height: 10,
    top: 210,
    left: 180,
  },
});

export { styles, imageStyle };
