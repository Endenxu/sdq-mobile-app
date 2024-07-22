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

type UploadFileScreenProps = StackScreenProps<RootStackParamList, "UploadFile">;

const UploadFile = ({ navigation }: UploadFileScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);

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
          <View style={{}}>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text style={[styles.title3, { color: "#8A8A8A" }]}>
                Email Address
              </Text>
            </View>
            <View style={{ marginBottom: 20, marginTop: 10 }}>
              <Input
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                onChangeText={(value) => console.log(value)}
                isFocused={isFocused}
                inputBorder
                defaultValue="info@examplegmail.com"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          GlobalStyleSheet.container,
          { paddingTop: 0, paddingHorizontal: 30 },
        ]}
      >
        <Button
          title={"Upload this File"}
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
