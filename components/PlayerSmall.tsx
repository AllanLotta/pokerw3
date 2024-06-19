import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Player as PlayerType } from "../types";
import bluechip from "../assets/images/chips/bluechip.png";
import Card from "./Card";
import { playerImageSize } from "../utils";

export default function PlayerSmall({ player }: { player: PlayerType }) {
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const { name, avatarUrl, isActive, chips } = player;
  const itsMe = player.itsMe;
  // const playerSize = itsMe ? 90 : 70;
  const playerSize = playerImageSize;
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
        style={[
          styles.playerCardsContainer,
          cardsVisible && styles.cardsVisible,
        ]}
      >
        {player.cards.map((card, index) => (
          <View
            style={[index === 0 ? styles.cardLeft : styles.cardRight]}
            key={index}
          >
            <Card
              card={card}
              type={cardsVisible ? "playerVisible" : "playerHidden"}
            />
          </View>
        ))}
      </View>
    );
  };

  const MyCards = () => {
    if (!itsMe) return null;
    return (
      <View style={styles.myCardsContainer}>
        {player.cards.map((card, index) => (
          <View
            style={[index === 0 ? styles.cardLeft : styles.cardRight]}
            key={index}
          >
            <Card card={card} type="my" />
          </View>
        ))}
      </View>
    );
  };

  const Bet = () => {
    if (player.betAmount === 0) return null;
    return (
      <View style={styles.betContainer}>
        <Image source={bluechip} style={styles.betChip} />
        <Text style={styles.betText}>{player.betAmount}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.player}>
        <Image
          source={{ uri: avatarUrl }}
          style={[styles.image, !isActive && styles.statusActive]}
        />
        <PlayerCards />
        <MyCards />
        {!itsMe && <Bet />}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerTop}>
          <Text style={styles.infoContainerTopName} numberOfLines={1}>
            {name}
          </Text>
          {/* <Text style={styles.infoContainerTopUserRank}>1st</Text> */}
        </View>
        <View style={styles.infoContainerBottom}>
          <Text style={styles.infoContainerBottomChips}>${formattedChips}</Text>
        </View>
        {itsMe && <Bet />}
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
      borderColor: "red",
    },
    image: {
      width: playerSize,
      height: playerSize,
      borderRadius: playerSize / 2,
    },
    playerCardsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      position: "absolute",
      alignSelf: "center",
      marginTop: -20,
      zIndex: -1,
    },
    myCardsContainer: {
      width: playerSize,
      height: playerSize,
      position: "absolute",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      right: -playerSize,
    },
    cardLeft: {
      borderRadius: 5,
    },
    cardRight: {
      marginLeft: -cardWidth / 2,
      transform: [{ rotate: "5deg" }],
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
      width: playerSize * 1.2,
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
      borderRadius: 3,
      backgroundColor: "black",
    },
    infoContainerTopUserRank: {
      color: "red",
      fontSize: 12,
    },
    infoContainerTopName: {
      color: "white",
      fontSize: 12,
      flex: 1, // flex 0.8 for name, 0.2 for rank
    },
    infoContainerBottomChips: {
      color: "yellow",
      fontSize: 12,
      fontWeight: "bold",
    },
    betContainer: {
      flexDirection: "row",
      position: "absolute",
      right: -(playerSize * 1.2) / 2,
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
