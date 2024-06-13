import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Player as PlayerType } from "../types";
import bluechip from "../assets/images/chips/bluechip.png";

export default function Player({ player }: { player: PlayerType }) {
  const { name, avatarUrl, isActive, chips } = player;
  const playerSize = 70;
  const styles = dynamicStyles(playerSize);
  return (
    <TouchableOpacity style={styles.container}>
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
      <View style={styles.infoContainer}>
        <Text style={styles.infoContainerName} lineBreakMode="clip" numberOfLines={1}>{name}</Text>
        <Text style={styles.infoContainerChips}>{chips}</Text>
      </View>
      <View style={styles.betContainer}>
        <Image source={bluechip} style={styles.betChip} />
        <Text style={styles.betText}>$100</Text>
      </View>
    </TouchableOpacity>
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
    infoContainer: {
      width: playerSize * 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: 5,
      marginTop: -10,
      padding: 2,
    },
    infoContainerName: {
      color: "white",
      fontSize: 12,
    },
    infoContainerChips: {
      color: "white",
      fontSize: 12,
    },
    betContainer: {
      flexDirection: "row",
      position: "absolute",
      top: 0,
      right: (playerSize / 1.5) * -1,
      backgroundColor: "#dcfcb5",
      padding: 2,
      borderRadius: 5,
    },
    betChip: {
      width: 15,
      height: 15,
      marginRight: 2,
    },
    betText: {
      color: "black",
      fontSize: 12,
    },
  });
