import React from "react";
import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import heart from "../assets/images/cards/heart.svg";
import spade from "../assets/images/cards/spade.svg";
import diamond from "../assets/images/cards/diamond.svg";
import club from "../assets/images/cards/club.svg";
import cardHidden from "../assets/images/cards/back.png";

export default function Card({
  card,
  type = "community",
}: {
  card: { suit: string; rank: string };
  type: "community" | "playerVisible" | "playerHidden" | "my";
}) {
  const { suit, rank } = card;
  // width of the card
  const defaultWidth = 30;
  const playerCardVisibleWidth = 40;
  const playerCardHiddenWidth = 30;
  const myCardWidth = 50;
  // size of the rank
  const defaultRankSize = 16;
  const myCardRankSize = 22;
  const playerCardRankSize = 18;

  const rankSize = type === "playerVisible" ? playerCardRankSize : type === "my" ? myCardRankSize : defaultRankSize;

  const suitIcon =
    suit === "hearts"
      ? heart
      : suit === "spades"
      ? spade
      : suit === "diamonds"
      ? diamond
      : club;
  const width = type === "playerVisible" ? playerCardVisibleWidth : type === "my" ? myCardWidth : type === "playerHidden" ? playerCardHiddenWidth : defaultWidth;
  const height = type !== "my" ? width * 1.3 : width * 1.2;
  const rankColor = suit === "hearts" || suit === "diamonds" ? "red" : "black";

  const styles = dynamicStyles(width, height, rankColor, rankSize, type === "my");

  if (type === "playerHidden") {
    return (
      <Image contentFit="contain" source={cardHidden} style={styles.playerCardHidden} />
    );
  }

  return (
    <View style={styles.container}>
      <Image contentFit="contain" source={suitIcon} style={styles.image} />
      <Text style={styles.rank}>{rank}</Text>
    </View>
  );
}

const dynamicStyles = (width: number, height: number, rankColor: string, rankSize: number, isMyCard: boolean) =>
  StyleSheet.create({
    container: {
      width,
      height,
      padding: 2,
      marginRight: 5,
      alignItems: "center",
      justifyContent: "flex-end",
      borderRadius: 5,
      backgroundColor: "#e3e3e3",
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.1)",
      elevation: 1,
    },
    image: {
      height: width * 0.5,
      width: width * 0.5,
    },
    playerCardHidden: {
      width,
      height,
      borderRadius: 5,
    },
    rank: {
      position: "absolute",
      top: 0,
      left: 5,
      fontWeight: "bold",
      fontSize: rankSize,
      color: rankColor,
    },
  });
