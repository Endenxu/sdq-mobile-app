import React from "react";
import { View, Switch, StyleSheet, ViewStyle } from "react-native";

interface ToggleSwitchProps {
  isEnabled: boolean;
  onToggle: () => void;
  style?: ViewStyle;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isEnabled, onToggle }) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#4caf50" }}
        thumbColor={isEnabled ? "#767577" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    bottom: 10,
  } as ViewStyle,
});

export default ToggleSwitch;
