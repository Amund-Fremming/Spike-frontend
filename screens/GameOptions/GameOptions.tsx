import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "./GameOptionsStyles";
import { validateInput } from "../../util/InputValidator";

import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";
import BigInput from "../../components/BigInput/BigInput";

import {
  createGame,
  IGame,
  gameExists,
  haveGameStarted,
} from "../../util/GameApiManager";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
  view: string;
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
}

export default function GameOptions({
  view,
  setView,
  gameId,
  setGameId,
}: HostProps) {
  const handleClick = async () => {
    if (!validateInput(gameId)) {
      Alert.alert(
        "Invalid Input",
        "Some characters are not allowed, try again"
      );
      setGameId("");
      return;
    }

    if (gameId.length > 10) {
      Alert.alert("Invalid Input", "Game ID is too long (<10), try again");
      setGameId("");
      return;
    }

    if (view === "HOST") {
      const game: IGame = {
        gameId: gameId,
        gameStarted: false,
        publicGame: false,
        iconImage: "NICE",
        numberOfQuestions: 0,
        percentageUpvotes: 0,
        usersVote: 2,
      };

      const response = await createGame(game);
      if (response === "GAME_EXISTS") {
        Alert.alert(
          "Invalid Game ID",
          `Game with ID ${gameId}, already exists!`
        );
        setGameId("");
        return;
      }
    }

    const gameStarted = await haveGameStarted(gameId);
    if (view === "JOIN" && gameStarted) {
      Alert.alert(
        "Invalid Game ID",
        `Game with ID ${gameId}, already started!`
      );
      setGameId("");
      return;
    }

    const gameExist = await gameExists(gameId);
    if (view === "JOIN" && !gameExist) {
      Alert.alert("Invalid Game ID", `Game with ID ${gameId}, does not exist!`);
      setGameId("");
      return;
    }

    setView(view === "HOST" ? "HOST_LOBBY" : "LOBBY");
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <BigInput
          value={gameId}
          placeholder="Game ID"
          handleChange={(text) => setGameId(text.toUpperCase())}
        />
        <BigButton
          text={view === "HOST" ? "Host" : "Join"}
          handlePress={handleClick}
        />
        <MediumButton text="Back" handlePress={() => setView("HOME")} />
      </View>
    </>
  );
}
