import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

interface CustomFABProps {
  onPress: () => void;
  style?: ViewStyle;
}

const CustomFAB: React.FC<CustomFABProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.fab, style]}
      onPress={onPress}
    >
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    width: 66,
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#04764E",
    borderRadius: 33, // Half of width/height to make it a circle
    elevation: 8,
    right: 10,
    bottom: 45,
  },
  fabText: {
    fontSize: 24,
    color: "white",
    bottom: 2,
  },
});

export default CustomFAB;
