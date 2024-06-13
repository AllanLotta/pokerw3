import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function BottomAction() {
  const Actions = [
    {
      id: 1,
      name: "Fold",
      position: "left",
      action: () => {},
    },
    {
      id: 2,
      name: "Check/Fold",
      position: "left",
      action: () => {},
    },
    {
      id: 3,
      name: "Check",
      position: "right",
      action: () => {},
    },
    {
      id: 4,
      name: "Raise",
      position: "right",
      action: () => {},
    },
    {
      id: 5,
      name: "All in",
      position: "right",
      action: () => {},
    },
  ]
  return (
    <View style={styles.containerBottom}>
      <View style={styles.containerBottomLeft}>
        {Actions.filter((action) => action.position === "left").map((action) => (
          <TouchableOpacity key={action.id} onPress={action.action} style={styles.constainerBottomRightButton}>
            <Text style={styles.constainerBottomRightButtonText}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.containerBottomRight}>
        {Actions.filter((action) => action.position === "right").map((action) => (
          <TouchableOpacity key={action.id} onPress={action.action} style={styles.constainerBottomRightButton}>
            <Text style={styles.constainerBottomRightButtonText}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBottom: {
    bottom: 0,
    position: "absolute",
    height: "20%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerBottomLeft: {
    width: "30%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerBottomRight: {
    width: "30%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  constainerBottomRightButton: {
    padding: 10,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "rgba(800, 800, 800, 0.3)",
    borderWidth: 1,
  },
  constainerBottomRightButtonText: {
    color: "white",
  },
});
