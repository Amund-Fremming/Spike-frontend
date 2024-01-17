import React, { useState, Dispatch, SetStateAction } from "react";
import { Text, View, Pressable, TextInput, Image } from "react-native";
import { styles, imageStyles } from "./LobbyStyles";

import {
  Question,
  postQuestionToGame,
  fetchQuestionsForGame,
} from "../../ApiManager";

interface LobbyProps {
  setGameId: Dispatch<SetStateAction<string>>;
  gameId: string;
  setView: Dispatch<SetStateAction<string>>;
  view: string;
}

export default function Lobby({
  setGameId,
  gameId,
  setView,
  view,
}: LobbyProps) {
  const [addPressed, setAddPressed] = useState(false);
  const [leavePressed, setLeavePressed] = useState(false);
  const [question, setQuestion] = useState("");

  const rover = require("../../assets/images/rover.png");

  const getButtonStyles = (isPressed: boolean) => ({
    ...styles.button,
    transform: isPressed
      ? [{ translateX: 7 }, { translateY: 8 }]
      : [{ translateX: 0 }, { translateY: 0 }],
    shadowOffset: isPressed ? { width: 2, height: 3 } : { width: 7, height: 8 },
    shadowOpacity: isPressed ? 0.7 : 1,
  });

  const getBackButtonStyles = (isPressed: boolean) => ({
    ...styles.backButton,
    transform: isPressed
      ? [{ translateX: 7 }, { translateY: 8 }]
      : [{ translateX: 0 }, { translateY: 0 }],
    shadowOffset: isPressed ? { width: 2, height: 3 } : { width: 7, height: 8 },
    shadowOpacity: isPressed ? 0.7 : 1,
  });

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  const handleAddQuestion = async () => {
    const newQuestion: Question = {
      gameId: gameId,
      questionStr: question,
    };

    await postQuestionToGame(newQuestion);
  };

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <Image source={rover} style={imageStyles.rover} />
        <TextInput
          onChangeText={(text: string) => setQuestion(text)}
          style={styles.input}
        />
      </View>
      <Pressable
        onPress={handleAddQuestion}
        onPressIn={() => setAddPressed(true)}
        onPressOut={() => setAddPressed(false)}
        style={() => getButtonStyles(addPressed)}
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>
      <Pressable
        onPress={handleLeave}
        onPressIn={() => setLeavePressed(true)}
        onPressOut={() => setLeavePressed(false)}
        style={() => getBackButtonStyles(leavePressed)}
      >
        <Text style={styles.text}>Leave</Text>
      </Pressable>
    </View>
  );
}
