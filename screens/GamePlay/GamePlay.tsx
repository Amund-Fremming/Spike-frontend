import React, { useState, useEffect } from "react";
import { View, Image, Alert } from "react-native";
import { styles, imageStyle } from "./GamePlayStyles.js";
import "react-native-url-polyfill/auto";

import NetInfo from "@react-native-community/netinfo";

import HomeOptions from "./components/HomeOptions/HomeOptions";
import GameOptions from "./components/GameOptions/GameOptions";
import Lobby from "./components/Lobby/Lobby";

import * as Font from "expo-font";
import Game from "./components/Game/Game";

import { setDeviceIdentifier } from "../../util/DeviceIdentifierUtil";
import Mascot from "../../components/Mascot/Mascot";
import Planets from "../../components/Planets/Planets";

import { useGamePlayProvider } from "../../providers/GamePlayProvider";

export default function GamePlay() {
  const { view, setView, gameId, setGameId, deviceId, setDeviceId } =
    useGamePlayProvider();

  const [fontLoaded, setFontsLoaded] = useState(false);

  const star = require("../../assets/images/star.png");
  //const star = require("../../assets/images/star.png");

  const loadFonts = async () => {
    await Font.loadAsync({
      PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
    setDeviceIdentifier(setDeviceId);

    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.type !== "wifi") {
        Alert.alert(
          "No WiFi Connection",
          "You are not connected to WiFi. Some features may not work as expected."
        );
      }
    });

    return () => unsubscribe();
  }, []);

  if (!fontLoaded) {
    return (
      <Image
        style={imageStyle.loadingImage}
        source={require("../../assets/splash.png")}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.layerOneCircle}>
          <View style={styles.layerTwoCircle}>
            <View style={styles.layerThreeCircle}>
              {view === "HOME" ? (
                <HomeOptions setView={setView} />
              ) : view === "HOST" || view === "JOIN" ? (
                <GameOptions
                  view={view}
                  setView={setView}
                  gameId={gameId}
                  setGameId={setGameId}
                />
              ) : view === "LOBBY" || view == "HOST_LOBBY" ? (
                <Lobby
                  setGameId={setGameId}
                  view={view}
                  setView={setView}
                  gameId={gameId}
                />
              ) : view === "GAME" ? (
                <Game gameId={gameId} setGameId={setGameId} setView={setView} />
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>

        {/* Absolute Planets and Mascot */}
        {["HOST", "JOIN", "HOME"].includes(view) && (
          <>
            <Mascot />
            <Planets />
          </>
        )}

        {/* Absolute Stars */}
        <View style={styles.stars}>
          <Image source={star} style={imageStyle.starOne} />
          <Image source={star} style={imageStyle.starTwo} />
          <Image source={star} style={imageStyle.starThree} />

          <Image source={star} style={imageStyle.starFour} />
          <Image source={star} style={imageStyle.starFive} />
          <Image source={star} style={imageStyle.starSix} />

          <Image source={star} style={imageStyle.starSeven} />
          <Image source={star} style={imageStyle.starEight} />
          <Image source={star} style={imageStyle.starNine} />

          <Image source={star} style={imageStyle.starTen} />
          <Image source={star} style={imageStyle.starEleven} />
          <Image source={star} style={imageStyle.starTwelve} />

          <Image source={star} style={imageStyle.starThirteen} />
          <Image source={star} style={imageStyle.starFourteen} />
          <Image source={star} style={imageStyle.starFifteen} />

          <Image source={star} style={imageStyle.starSixteen} />
          <Image source={star} style={imageStyle.starSeventeen} />
          <Image source={star} style={imageStyle.starEighteen} />
        </View>
      </View>
    </>
  );
}
