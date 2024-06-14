import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
} from "react-native";
import { useState } from "react";
import background from "@/assets/images/background/background.jpg";
import bluechip from "@/assets/images/chips/bluechip.png";
import BottomAction from "@/components/BottomAction";
import Player from "@/components/Player";
import Card from "@/components/Card";
import { playersList, communityCards } from "@/utils";

export default function PokerTable() {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  const playerSize = 60;
  const styles = dynamicStyles(containerDimensions);

  const getUserPosition = (
    index: number,
    total: number,
    containerWidth: number,
    containerHeight: number
  ) => {
    const angle = (index / total) * 2 * Math.PI;
    const radiusX = (containerWidth + playerSize) / 2; // Adjust X radius for elliptical shape
    const radiusY = (containerHeight + playerSize) / 2; // Adjust Y radius for elliptical shape
    const x = Math.cos(angle) * radiusX + containerWidth / 2;
    const y = Math.sin(angle) * radiusY + containerHeight / 2;
    return { x: x - playerSize / 2, y: y - playerSize / 2 }; // Center player element
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={background}>
      <SafeAreaView style={styles.safeView}>
        <View
          style={styles.container}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setContainerDimensions({ width, height });
          }}
        >
          {playersList.map((player, index) => {
            const { width, height } = containerDimensions;
            if (width === 0 || height === 0) {
              return null;
            }

            const { x, y } = getUserPosition(
              index,
              playersList.length,
              width,
              height
            );
            return (
              <View key={index} style={{ left: x, top: y }}>
                <Player player={player} />
              </View>
            );
          })}
          <View style={styles.tableCenterContainer}>
            <View style={styles.cardsContainer}>
              {communityCards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </View>
            <View style={styles.potContainer}>
              <Image source={bluechip} style={styles.potImage} />
              <Text style={styles.potText}>1k</Text>
            </View>
          </View>
        </View>
        <BottomAction />
      </SafeAreaView>
    </ImageBackground>
  );
}

const dynamicStyles = (containerDimensions: {
  width: number;
  height: number;
}) =>
  StyleSheet.create({
    safeView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 0.4,
      width: "60%",
      borderRadius: 200,
      borderColor: "rgba(800, 800, 800, 0.3)",
      borderWidth: 2,
    },
    tableCenterContainer: {
      alignSelf: "center",
      marginTop: containerDimensions.height * 0.35,
    },
    cardsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      zIndex: -1,
    },
    potContainer: {
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: 5,
      marginTop: 10,
      // padding: 2,
      backgroundColor: "#dcfcb5",
      borderRadius: 10,
    },
    potImage: {
      width: 20,
      height: 20,
      marginRight: 3,
    },
    potText: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
    },
    player: {
      position: "absolute",
      backgroundColor: "#a1a1a1",
      borderRadius: 30,
    },
  });
