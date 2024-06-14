import React from "react";
import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import heart from "../assets/images/cards/heart.svg";
import spade from "../assets/images/cards/spade.svg";
import diamond from "../assets/images/cards/diamond.svg";
import club from "../assets/images/cards/club.svg";
export default function Card({
  card,
  playerCardVisible,
}: {
  card: { suit: string; rank: string };
  playerCardVisible?: boolean;
}) {
  const { suit, rank } = card;
  const defaultWidth = 30;
  const defaultHeight = 40;
  const playerCardVisibleWidth = 40;
  const playerCardVisibleHeight = 50;
  const rankSize = playerCardVisible ? 18 : 16;

  const suitIcon =
    suit === "hearts"
      ? heart
      : suit === "spades"
      ? spade
      : suit === "diamonds"
      ? diamond
      : club;
  const width = playerCardVisible ? playerCardVisibleWidth : defaultWidth;
  const height = playerCardVisible ? playerCardVisibleHeight : defaultHeight;
  const rankColor = suit === "hearts" || suit === "diamonds" ? "red" : "black";

  const styles = dynamicStyles(width, height, rankColor, rankSize);

  return (
    <View style={styles.container}>
      <Image contentFit="contain" source={suitIcon} style={styles.image} />
      <Text style={styles.rank}>{rank}</Text>
    </View>
  );
}

const dynamicStyles = (width: number, height: number, rankColor: string, rankSize: number) =>
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
    rank: {
      position: "absolute",
      top: 0,
      left: 5,
      fontWeight: "bold",
      fontSize: rankSize,
      color: rankColor,
    },
  });
