import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
  status?: any;
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
  status,
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
      style={[styles.datacontainer]}
    >
      <View
        style={{
          width: "30%",
          alignItems: "center",
        }}
      >
        <View style={[styles.dataprofile]}>
          <Image
            style={{ height: undefined, width: "100%", aspectRatio: 1 / 1 }}
            source={image}
          />
        </View>
        <View style={{ right: 15 }}>
          <Text style={{ ...FONTS.fontSm }}>#{id}</Text>
        </View>
      </View>

      <View style={[styles.datatextcontainer]}>
        <View>
          <Text
            style={{
              ...FONTS.fontMedium,
              fontSize: 16,
              color: colors.title,
              paddingRight: 0,
              paddingBottom: 0,
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
              paddingRight: 0,
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: 0,
          alignItems: "center",
          right: 11,
        }}
      >
        <View style={[styles.datastatus]}>
          <Image
            style={{ height: undefined, width: "100%", aspectRatio: 1 / 1 }}
            source={status}
          />
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
  datacontainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    height: 65,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
    borderBottomWidth: 6,
    borderBottomColor: "#ccc",
    shadowColor: "#000",
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  dataprofile: {
    height: 35,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
    right: 18,
    overflow: "hidden",
    top: 2,
  },
  datastatus: {
    height: 20,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 200,
    aspectRatio: 1 / 1,
    alignItems: "center",
    justifyContent: "center",
    right: 7,
    overflow: "hidden",
    top: 2,
  },
  datatextcontainer: {
    width: "70%",
    paddingHorizontal: 5,
    overflow: "hidden",
    right: 29,
  },
});

export default Cardstyle4;
