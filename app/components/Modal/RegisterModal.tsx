import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ScrollView } from "react-native-gesture-handler";
import DropdownComponent from "../Input/dropdown";

type Props = {
  close: any;
};

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const handleSelect = (value: string) => {
  console.log("Selected value:", value);
};

const RegisterModal = ({ close }: Props) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <View
      style={{
        backgroundColor: theme.dark ? colors.background : colors.card,
        maxWidth: 330,
        width: "100%",
        borderRadius: SIZES.radius,
        height: 430,
      }}
    >
      <View
        style={{
          //backgroundColor:theme.dark ? 'rgba(255,255 :colors.card,
          maxWidth: 330,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 15,
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          }}
        >
          <Text
            style={{ flex: 1, ...FONTS.h6, fontSize: 20, color: colors.title }}
          >
            Filter Files
          </Text>
          <TouchableOpacity
            onPress={() => close(false)}
            style={{
              height: 32,
              width: 32,
              borderRadius: 32,
              backgroundColor: colors.background,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather size={20} color={colors.title} name="x" />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ maxHeight: 300, marginBottom: 25 }}>
          <View style={[styles.dropdownpair]}>
            <View>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Department:
              </Text>
              <View style={{ marginBottom: 0, marginTop: 0 }}>
                <DropdownComponent
                  data={data}
                  label="Select an option"
                  onSelect={handleSelect}
                  placeholder="Select..."
                />
              </View>
            </View>

            <View>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                File Type:
              </Text>
              <View style={{ marginBottom: 0, marginTop: 0 }}>
                <DropdownComponent
                  data={data}
                  label="Select an option"
                  onSelect={handleSelect}
                  placeholder="Select..."
                />
              </View>
            </View>
          </View>

          <View style={[styles.dropdownpair]}>
            <View>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Folders:
              </Text>
              <View style={{ marginBottom: 0, marginTop: 0 }}>
                <DropdownComponent
                  data={data}
                  label="Select an option"
                  onSelect={handleSelect}
                  placeholder="Select..."
                />
              </View>
            </View>

            <View>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Owner Dept:
              </Text>
              <View style={{ marginBottom: 0, marginTop: 0 }}>
                <DropdownComponent
                  data={data}
                  label="Select an option"
                  onSelect={handleSelect}
                  placeholder="Select..."
                />
              </View>
            </View>
          </View>

          <View style={[styles.dropdownpair]}>
            <View>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Owner Branch:
              </Text>
              <View style={{ marginBottom: 0, marginTop: 0 }}>
                <DropdownComponent
                  data={data}
                  label="Select an option"
                  onSelect={handleSelect}
                  placeholder="Select..."
                />
              </View>
            </View>

            <View>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Status:
              </Text>
              <View style={{ marginBottom: 0, marginTop: 0 }}>
                <DropdownComponent
                  data={data}
                  label="Select an option"
                  onSelect={handleSelect}
                  placeholder="Select..."
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <Button
          onPress={() => {}}
          title={"Apply Filter"}
          text={theme.dark ? COLORS.title : COLORS.card}
          color={colors.title}
          style={{}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title1: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: COLORS.title,
    marginBottom: 5,
  },
  title2: {
    ...FONTS.fontRegular,
    fontSize: 14,
    color: COLORS.title,
  },
  title3: {
    ...FONTS.fontMedium,
    fontSize: 14,
    color: "#8A8A8A",
  },
  title4: {
    ...FONTS.fontRegular,
    fontSize: 14,
    color: COLORS.primary,
    textDecorationLine: "underline",
    textDecorationColor: "#8ABE12",
  },
  dropdownpair: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
});

export default RegisterModal;
