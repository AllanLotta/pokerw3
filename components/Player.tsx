import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Player as PlayerType } from "../types";

export default function Player({ player }: { player: PlayerType }) {
  const { name, avatarUrl, isActive, chips } = player;
  const playerSize = 70;
  const styles = dynamicStyles(playerSize);
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <Image
          source={{ uri: avatarUrl }}
          style={[styles.image, !isActive && styles.statusActive]}
        />
        <View style={styles.cardsContainer}>
          <Image
            source={{
              uri: "https://i.ebayimg.com/images/g/hcsAAOSwfPpgExnB/s-l1200.webp",
            }}
            style={{
              width: 30,
              height: 40,
              borderRadius: 5,
            }}
          />
          <Image
            source={{
              uri: "https://i.ebayimg.com/images/g/hcsAAOSwfPpgExnB/s-l1200.webp",
            }}
            style={{
              width: 30,
              height: 40,
              position: "absolute",
              left: 20,
              transform: [{ rotate: "10deg" }],
            }}
          />
        </View>
      </View>
      {/* <Text>{name}</Text>
      <Text>{chips}</Text> */}
    </View>
  );
}

const dynamicStyles = (playerSize: number) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      width: playerSize,
      height: playerSize,
      alignItems: "center",
      justifyContent: "center",
    },
    player: {
      alignItems: "flex-end",
    },
    image: {
      width: playerSize,
      height: playerSize,
      borderRadius: playerSize / 2,
    },
    cardsContainer: {
      flexDirection: "row",
      width: 50,
      position: "absolute",
      marginTop: -20,
      zIndex: -1,
    },
    statusActive: {
      borderWidth: 5,
      borderColor: "blue",
    },
  });
