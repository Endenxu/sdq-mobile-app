import React, { useEffect } from "react";
import { View, StyleSheet, Button, Animated, Dimensions } from "react-native";
import { Checkbox, Title, Text } from "react-native-paper";

const { height } = Dimensions.get("window");

interface FilterOverlayProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: Record<string, boolean>) => void;
}

const FilterOverlay: React.FC<FilterOverlayProps> = ({
  visible,
  onClose,
  onApplyFilters,
}) => {
  const [filters, setFilters] = React.useState<Record<string, boolean>>({
    option1: false,
    option2: false,
    option3: false,
  });

  const translateY = new Animated.Value(height);

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleToggle = (option: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [option]: !prevFilters[option],
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  return (
    <Animated.View style={[styles.overlay, { transform: [{ translateY }] }]}>
      <View style={styles.container}>
        <Title>Filter Options</Title>
        <View style={styles.option}>
          <Checkbox
            status={filters.option1 ? "checked" : "unchecked"}
            onPress={() => handleToggle("option1")}
          />
          <Text>Option 1</Text>
        </View>
        <View style={styles.option}>
          <Checkbox
            status={filters.option2 ? "checked" : "unchecked"}
            onPress={() => handleToggle("option2")}
          />
          <Text>Option 2</Text>
        </View>
        <View style={styles.option}>
          <Checkbox
            status={filters.option3 ? "checked" : "unchecked"}
            onPress={() => handleToggle("option3")}
          />
          <Text>Option 3</Text>
        </View>
        <Button title="Apply Filters" onPress={handleApply} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default FilterOverlay;
