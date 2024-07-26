import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/reducer/cartReducer";
import Cardstyle1 from "../../components/Card/Cardstyle1";

//Not Available Yet Screen For QR Tentative

type NotAvailableYetProps = StackScreenProps<
  RootStackParamList,
  "NotAvailableYet"
>;

const NotAvailableYet = ({ route, navigation }: NotAvailableYetProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header
        title="Not Available Yet"
        leftIcon="back"
        //titleLeft
        rightIcon4={"home"}
      />
      <View
        style={{
          height: 60,
          width: 60,
          borderRadius: 60,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.primaryLight,
          marginBottom: 20,
        }}
      >
        <AntDesign color={COLORS.primary} size={24} name="close" />
      </View>
      <Text style={{ ...FONTS.h5, color: colors.title, marginBottom: 8 }}>
        This Feature is on Development!
      </Text>
    </View>
  );
};

export default NotAvailableYet;
