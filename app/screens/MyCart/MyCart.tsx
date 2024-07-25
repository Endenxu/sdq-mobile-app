import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { Feather, AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/reducer/cartReducer";
import Cardstyle1 from "../../components/Card/Cardstyle1";

const cardData = [
  {
    id: "0",
    image: IMAGES.item1,
    title: "Hot Creamy Cappuccino Latte Ombe ",
    price: "$12.6",
    discount: "8.3",
  },
  {
    id: "1",
    image: IMAGES.item2,
    title: "Hot Cappuccino Latte with Mocha",
    price: "$13.6",
    brand: "Coffee",
  },
  {
    id: "2",
    image: IMAGES.item3,
    title: "Sweet Lemon Indonesian Tea",
    price: "$51.6",
    brand: "Tea, Lemon",
  },
  {
    id: "3",
    image: IMAGES.item13,
    title: "Arabica Latte Ombe Coffee",
    price: "$51.6",
    brand: "Coffee",
  },
  {
    id: "4",
    image: IMAGES.item14,
    title: "Original Latte Ombe Hot Coffee ",
    price: "$51.6",
    brand: "Coffee",
  },
];

type MyCartScreenProps = StackScreenProps<RootStackParamList, "MyCart">;

const MyCart = ({ navigation }: MyCartScreenProps) => {
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const removeItemFromCart = (data: any) => {
    dispatch(removeFromCart(data));
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Not Available Yet" leftIcon="back" titleRight />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 60,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primaryLight,
            marginBottom: 20,
            bottom: 50,
          }}
        >
          <AntDesign color={COLORS.primary} size={24} name="close" />
        </View>
        <Text
          style={{
            ...FONTS.h5,
            color: colors.title,
            marginBottom: 8,
            bottom: 50,
          }}
        >
          Feature not Available Yet.
        </Text>
      </View>
    </View>
  );
};

export default MyCart;
