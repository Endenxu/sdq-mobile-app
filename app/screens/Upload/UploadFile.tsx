import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Input from "../../components/Input/Input";
import { IMAGES } from "../../constants/Images";
import Button from "../../components/Button/Button";
import Header from "../../layout/Header";
import DropdownComponent from "../../components/Input/dropdown";
import ToggleSwitch from "../../components/Input/toggleswitch";

type UploadFileScreenProps = StackScreenProps<RootStackParamList, "UploadFile">;

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

const UploadFile = ({ navigation }: UploadFileScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);

  const [isSwitchOneEnabled, setIsSwitchOneEnabled] = useState(false);
  const [isSwitchTwoEnabled, setIsSwitchTwoEnabled] = useState(false);

  const toggleSwitchOne = () =>
    setIsSwitchOneEnabled((prevState) => !prevState);
  const toggleSwitchTwo = () =>
    setIsSwitchTwoEnabled((prevState) => !prevState);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.card }}>
      <Header
        title="Upload File"
        leftIcon={"back"}
        rightIcon4={"home"}
        //titleLeft
      />
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              flexGrow: 1,
              paddingBottom: 0,
              paddingHorizontal: 30,
              paddingTop: 0,
            },
          ]}
        >
          <View style={{ marginTop: 20 }}>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Button
                title={"Select File"}
                color={COLORS.dark}
                onPress={() => navigation.navigate("SingIn")}
                style={{ borderRadius: 10 }}
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 20 }]}
              >
                File Name
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <Input
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                onChangeText={(value) => console.log(value)}
                isFocused={isFocused}
                inputBorder
                defaultValue="Please, Enter File Name"
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                File Description
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <Input
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                onChangeText={(value) => console.log(value)}
                isFocused={isFocused}
                inputBorder
                defaultValue="Please, Enter File Description"
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[
                  styles.title3,
                  { color: "#000000", marginTop: 20, fontSize: 18 },
                ]}
              >
                Categorization info:
              </Text>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Save To:
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                File Type:
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                QR Template:
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Owner Department
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Owner Branch:
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Tags:
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Auth Info
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <Input
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                onChangeText={(value) => console.log(value)}
                isFocused={isFocused}
                inputBorder
                defaultValue=""
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[styles.title3, { color: "#8A8A8A", marginTop: 10 }]}
              >
                Auth Required By:
              </Text>
            </View>
            <View style={{ marginBottom: 0, marginTop: 0 }}>
              <DropdownComponent
                data={data}
                label="Select an option"
                onSelect={handleSelect}
                placeholder="Select..."
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text
                style={[
                  styles.title3,
                  { color: "#8A8A8A", marginTop: 10, marginBottom: 10 },
                ]}
              >
                Access Level:
              </Text>
            </View>
            <View
              style={{
                marginBottom: 0,
                marginTop: 0,
                justifyContent: "space-between",
                flexDirection: "row",
                flex: 1,
                width: "100%",
              }}
            >
              <ToggleSwitch
                isEnabled={isSwitchOneEnabled}
                onToggle={toggleSwitchOne}
              />

              <Text style={{ flex: 1, justifyContent: "center", fontSize: 10 }}>
                Any one in the organization?
              </Text>
              <ToggleSwitch
                isEnabled={isSwitchTwoEnabled}
                onToggle={toggleSwitchTwo}
              />

              <Text style={{ flex: 1, fontSize: 10 }}>
                Anyone with the link
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          GlobalStyleSheet.container,
          { paddingTop: 0, paddingHorizontal: 30, height: 75 },
        ]}
      >
        <Button
          title={"Save"}
          color={COLORS.primary}
          onPress={() => navigation.navigate("SingIn")}
          style={{ borderRadius: 52 }}
        />
      </View>
    </SafeAreaView>
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
  imagebackground: {
    height: 46,
    width: 46,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadFile;
