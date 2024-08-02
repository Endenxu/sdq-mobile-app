// src/DateInput.tsx

import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform, ViewStyle } from "react-native";
import { IconButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { useTheme } from "@react-navigation/native";

type DateInputProps = {
  initialDate?: string;
  onDateChange: (date: string) => void;
  style?: ViewStyle;
};

const DateInput: React.FC<DateInputProps> = ({ initialDate, onDateChange }) => {
  const [date, setDate] = useState(initialDate || "");
  const [showPicker, setShowPicker] = useState(false);
  const [pickerDate, setPickerDate] = useState<Date>(new Date());

  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      setDate(formattedDate);
      onDateChange(formattedDate);
    }
    setShowPicker(Platform.OS === "ios");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input]}
        value={date}
        placeholder="YYYY-MM-DD"
        onChangeText={setDate}
        keyboardType="numeric"
        placeholderTextColor={colors.title3}
      />
      <IconButton
        icon="calendar"
        size={20}
        onPress={() => setShowPicker(true)}
      />
      {showPicker && (
        <DateTimePicker
          value={pickerDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
});

export default DateInput;
