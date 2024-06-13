import React from "react";
import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import heart from "../assets/images/cards/heart.svg";
import spade from "../assets/images/cards/spade.svg";
import diamond from "../assets/images/cards/diamond.svg";
import club from "../assets/images/cards/club.svg";
export default function Card({
  card,
}: {
  card: { suit: string; rank: string };
}) {
  const { suit, rank } = card;
  const suitIcon =
    suit === "hearts"
      ? heart
      : suit === "spades"
      ? spade
      : suit === "diamonds"
      ? diamond
      : club;
  const width = 30;
  const height = 40;
  const rankColor = suit === "hearts" || suit === "diamonds" ? "red" : "black";

  const styles = dynamicStyles(width, height, rankColor);

  return (
    <View style={styles.container}>
      <Image contentFit="contain" source={suitIcon} style={styles.image} />
      <Text style={styles.rank}>{rank}</Text>
    </View>
  );
}

const dynamicStyles = (width: number, height: number, rankColor: string) =>
  StyleSheet.create({
    container: {
      width,
      height,
      padding: 5,
      marginRight: 5,
      alignItems: "center",
      justifyContent: "flex-end",
      borderRadius: 5,
      backgroundColor: "#e3e3e3",
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
      fontSize: 16,
      color: rankColor,
    },
  });
