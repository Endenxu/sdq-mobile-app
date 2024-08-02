import React, { useState } from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useTheme } from "@react-navigation/native";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownComponentProps {
  data: DropdownItem[];
  label: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  data,
  label,
  onSelect,
  placeholder = "Select an item...",
  style,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <View style={[styles.container, style]}>
      {/*<Text style={styles.label}>{label}</Text>*/}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={[styles.placeholderStyle, { color: colors.title3 }]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          onSelect(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 0,
    borderRadius: 8,
    width: 140,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: "black",
  },
  dropdown: {
    height: 40,
    width: 140,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "black",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default DropdownComponent;
