import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { styles, imageStyle } from "./PublicGameCarsStyles";
import { IGame } from "../../util/GameApiManager";
import { Voter, voteOnGame } from "../../util/VoteApiManager";

import Feather from "react-native-vector-icons/Feather";

// For setting up navigation with ts
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../navigators/NavigationTypes";

type GamePlayNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  "Game"
>;

interface PublicGameCardProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
  game: IGame;
  deviceId: string;
}

export function PublicGameCard({
  setGameId,
  setView,
  game,
  deviceId,
}: PublicGameCardProps) {
  const navigation = useNavigation<GamePlayNavigationProp>();

  const [upvoteColor, setUpvoteColor] = useState("gray");
  const [downvoteColor, setDownvoteColor] = useState("gray");
  const [gameRating, setGameRating] = useState(0);

  useEffect(() => {
    setGameRating(game.upvotes);
    updateVoteColor(game.usersVote);
  }, [game]);

  const icon =
    game.iconImage === "DIRTY"
      ? require("../../assets/images/icons/dirtyIcon.webp")
      : game.iconImage === "EDGY"
      ? require("../../assets/images/icons/edgyIcon.webp")
      : require("../../assets/images/icons/niceIcon.webp");

  const handleClick = () => {
    setGameId(game.gameId);
    setView("GAME");

    navigation.navigate("Game");
  };

  const updateVoteColor = (vote: number) => {
    if (vote === 1) {
      setDownvoteColor("gray");
      setUpvoteColor("green");
    }

    if (vote === 0) {
      setDownvoteColor("red");
      setUpvoteColor("gray");
    }

    if (vote === 3) {
      setDownvoteColor("gray");
      setUpvoteColor("gray");
    }
  };

  const handleVote = async (vote: number) => {
    if (vote === 0) {
      setGameRating(game.upvotes - 1);
    }

    if (vote === 1) {
      setGameRating(game.upvotes + 1);
    }

    updateVoteColor(vote);
    setView("HOME"); // For triggering updated fetch when updating data.

    const voter: Voter = {
      userDeviceId: deviceId,
      gameId: game.gameId,
      vote: vote,
    };

    await voteOnGame(voter);
  };

  return (
    <Pressable onPress={handleClick}>
      <View style={styles.cardContainer}>
        <View style={styles.textSplit}>
          <Text style={styles.headerText}>{game.gameId}</Text>
          <Text style={styles.subHeaderText}>
            Questions:{game.numberOfQuestions}
          </Text>
          <View style={styles.voteContainer}>
            <Pressable onPress={() => handleVote(1)}>
              <Feather name="thumbs-up" size={26} color={upvoteColor} />
            </Pressable>
            <Pressable onPress={() => handleVote(0)}>
              <Feather name="thumbs-down" size={26} color={downvoteColor} />
            </Pressable>
            <Text style={styles.procentileText}>{gameRating}</Text>
          </View>
        </View>
        <View style={styles.iconSplit}>
          <Image style={imageStyle.niceIcon} source={icon} />
        </View>
      </View>
    </Pressable>
  );
}
