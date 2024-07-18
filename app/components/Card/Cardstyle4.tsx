import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { IMAGES } from "../../constants/Images";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwishList } from "../../redux/reducer/wishListReducer";
import LikeBtn from "../LikeBtn";

type Props = {
  id: string;
  name: string;
  title: string;
  btntitle?: string;
  price: string;
  brand?: string;
  image?: any;
  product?: any;
  Myorder?: any;
  completed?: any;
  countnumber?: string;
  onPress?: (e: any) => void;
  onPress2?: any;
  onPress3?: (e: any) => void;
  onPress4?: (e: any) => void;
  onPress5?: (e: any) => void;
};

const Cardstyle4 = ({
  name,
  id,
  title,
  image,
  countnumber,
  price,
  onPress,
  brand,
  product,
  onPress2,
  Myorder,
  btntitle,
  completed,
  onPress5,
  onPress3,
  onPress4,
}: Props) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [show, setshow] = useState(false);

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-start",
        borderColor: "#000000",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          width: "30%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 35,
            width: "100%",
            backgroundColor: COLORS.primary,
            borderRadius: 200,
            aspectRatio: 1 / 1,
            alignItems: "center",
            justifyContent: "center",
            right: 20,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ height: undefined, width: "100%", aspectRatio: 1 / 1 }}
            source={image}
          />
        </View>
      </View>

      <View
        style={{
          width: "70%",
          paddingHorizontal: 2,
          paddingRight: product ? 10 : 1,
          borderColor: "#000000",
          borderWidth: 1,
          overflow: "hidden",
          right: 30,
        }}
      >
        <View>
          <Text
            style={{
              ...FONTS.fontMedium,
              fontSize: 16,
              color: colors.title,
              paddingRight: 40,
              paddingBottom: 10,
            }}
          >
            {name}
          </Text>
        </View>

        <View>
          <Text
            style={{
              ...FONTS.fontMedium,
              fontSize: 16,
              color: colors.title,
              paddingRight: 40,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
});

export default Cardstyle4;
