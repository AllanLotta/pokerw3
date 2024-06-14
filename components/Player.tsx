import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Player as PlayerType } from "../types";
import bluechip from "../assets/images/chips/bluechip.png";
import Card from "./Card";

export default function Player({ player }: { player: PlayerType }) {
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const { name, avatarUrl, isActive, chips } = player;
  const itsMe = player.itsMe;
  const playerSize = itsMe ? 90 : 70;
  const cardWidth = cardsVisible ? 40 : 30;
  const cardHeight = cardsVisible ? 60 : 40;

  const styles = dynamicStyles({
    playerSize,
    cardWidth,
    cardHeight,
  });

  const formattedChips = chips.toLocaleString();

  const handlePress = () => {
    if (itsMe) {
      return null;
    }
  setCardsVisible((old) => !old);
  };

  const PlayerCards = () => {
    if (itsMe) return null;
    return (
      <View
          style={[styles.cardsContainer, cardsVisible && styles.cardsVisible]}
        >
          {!cardsVisible ? (
            <>
              <Image
                source={{
                  uri: "https://i.ebayimg.com/images/g/hcsAAOSwfPpgExnB/s-l1200.webp",
                }}
                style={styles.cardLeft}
              />
              <Image
                source={{
                  uri: "https://i.ebayimg.com/images/g/hcsAAOSwfPpgExnB/s-l1200.webp",
                }}
                style={styles.cardRight}
              />
            </>
          ) : (
            player.cards.map((card, index) => (
              <View
                style={[index === 0 ? styles.cardLeft : styles.cardRight]}
                key={index}
              >
                <Card card={card} playerCardVisible={true} />
              </View>
            ))
          )}
        </View>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <View style={styles.player}>
        <Image
          source={{ uri: avatarUrl }}
          style={[styles.image, !isActive && styles.statusActive]}
        />
        <PlayerCards />
        {/* my cards - positioned at right of the user */}
        {itsMe && <View
          style={{
            position: "absolute",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            right: -playerSize,
            // top: 0,
            width: playerSize,
            height: playerSize,
            // backgroundColor: "red",
          }}
        >
          {
            player.cards.map((card, index) => (
              <View
                style={[index === 0 ? styles.cardLeft : styles.cardRight]}
                key={index}
              >
                <Card card={card} isMyCard={true} />
              </View>
            ))
          }
        </View>}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerTop}>
          <Text style={styles.infoContainerTopName} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.infoContainerTopUserRank}>1st</Text>
        </View>
        <View style={styles.infoContainerBottom}>
          <Text style={styles.infoContainerBottomChips}>${formattedChips}</Text>
        </View>
      </View>
      <View style={styles.betContainer}>
        <Image source={bluechip} style={styles.betChip} />
        <Text style={styles.betText}>10{player.betAmount}</Text>
      </View>
    </TouchableOpacity>
  );
}

const dynamicStyles = ({
  playerSize,
  cardWidth,
  cardHeight,
}: {
  playerSize: number;
  cardWidth: number;
  cardHeight: number;
}) =>
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
      justifyContent: "center",
      position: "absolute",
      alignSelf: "center",
      marginTop: -20,
      zIndex: -1,
    },
    cardLeft: {
      width: cardWidth,
      height: cardHeight,
      borderRadius: 5,
      transform: [{ rotate: "-5deg" }],
    },
    cardRight: {
      width: cardWidth,
      height: cardWidth * 1.3,
      marginLeft: -cardWidth / 4,
      transform: [{ rotate: "10deg" }],
    },
    cardsVisible: {
      marginTop: 0,
      zIndex: 1,
    },
    statusActive: {
      borderWidth: 5,
      borderColor: "blue",
    },
    infoContainer: {
      width: playerSize * 1.5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
      borderRadius: 5,
      marginTop: -10,
      padding: 2,
    },
    infoContainerTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    infoContainerBottom: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#3f51b5",
    },
    infoContainerTopUserRank: {
      color: "red",
      fontSize: 12,
    },
    infoContainerTopName: {
      color: "white",
      fontSize: 12,
      flex: 0.8,
    },
    infoContainerBottomChips: {
      color: "yellow",
      fontSize: 12,
      fontWeight: "bold",
    },
    betContainer: {
      flexDirection: "row",
      position: "absolute",
      top: 0,
      right: (playerSize / 1.5) * -1,
      backgroundColor: "#dcfcb5",
      paddingRight: 5,
      borderRadius: 10,
    },
    betChip: {
      width: 15,
      height: 15,
      marginRight: 2,
    },
    betText: {
      color: "black",
      fontSize: 12,
      fontWeight: "bold",
    },
  });
