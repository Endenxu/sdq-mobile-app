import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { addTowishList } from "../../redux/reducer/wishListReducer";
import Cardstyle4 from "../../components/Card/Cardstyle4";
import { openDrawer } from "../../redux/actions/drawerAction";
import Button from "../../components/Button/Button";
import SuccessModal from "../../components/Modal/SuccessModal";

const AllData = [
  {
    id: "1234100",
    image: IMAGES.item1,
    name: "Khaled",
    title: "Bank Document",
  },
  {
    id: "1234200",
    image: IMAGES.item2,
    name: "Hugh",
    title: "QR",
  },
  {
    id: "1234300",
    image: IMAGES.item3,
    name: "John",
    title: "Code",
  },
  {
    id: "1234400",
    image: IMAGES.item1,
    name: "Khaled",
    title: "Bank Documents",
  },
  {
    id: "1234500",
    image: IMAGES.item2,
    name: "Khaled",
    title: "Proposals",
  },
  {
    id: "1234600",
    image: IMAGES.item3,
    name: "Khaled",
    title: "thesis",
  },
  {
    id: "1234700",
    image: IMAGES.item1,
    name: "Khaled",
    title: "Important Documents",
  },
  {
    id: "1234800",
    image: IMAGES.item2,
    name: "Khaled",
    title: "Proposals",
  },
];

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: HomeScreenProps) => {
  // const wishList = useSelector((state:any) => state.wishList.wishList);
  // console.log(wishList);

  const dispatch = useDispatch();

  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const addItemToWishList = (data: any) => {
    dispatch(addTowishList(data));
  };

  return (
    <View style={{ backgroundColor: colors.card, flex: 1 }}>
      <View style={{}}>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 30, padding: 0, paddingTop: 30 },
          ]}
        >
          <View style={[GlobalStyleSheet.flex]}>
            <View>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                Good Day
              </Text>
              <Text
                style={{
                  ...FONTS.fontSemiBold,
                  fontSize: 24,
                  color: colors.title,
                }}
              >
                Khaled
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
                activeOpacity={0.5}
                style={[GlobalStyleSheet.background3, {}]}
              >
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                  ]}
                  source={IMAGES.Notification}
                />
                <View
                  style={[
                    styles.notifactioncricle,
                    {
                      backgroundColor: colors.card,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 13,
                      width: 13,
                      borderRadius: 13,
                      backgroundColor: COLORS.primary,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                //onPress={() => navigation.openDrawer()}
                onPress={() => dispatch(openDrawer())}
                style={[GlobalStyleSheet.background3, {}]}
              >
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                  ]}
                  source={IMAGES.grid6}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 0, paddingHorizontal: 30, paddingTop: 10 },
          ]}
        >
          <View>
            <TextInput
              placeholder="Search"
              style={[
                styles.TextInput,
                { color: COLORS.title, backgroundColor: "#FAFAFA" },
              ]}
              placeholderTextColor={"#929292"}
            />
            <View style={{ position: "absolute", top: 15, right: 50 }}>
              <Feather name="search" size={24} color={"#C9C9C9"} />
            </View>
            <TouchableOpacity
              style={{ position: "absolute", top: 15, right: -10 }}
            >
              <Feather name="filter" size={24} color={"#5F5F5F"} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 0, paddingTop: 5, paddingBottom: 0 },
          ]}
        >
          <View style={[GlobalStyleSheet.flex, { paddingHorizontal: 30 }]}>
            <Text
              style={[
                styles.brandsubtitle3,
                { fontSize: 18, color: colors.title },
              ]}
            >
              Displayed Files
            </Text>
            {/*<TouchableOpacity onPress={() => navigation.navigate("Products")}>
              <Text
                style={[
                  styles.brandsubtitle3,
                  { fontSize: 16, color: COLORS.primary },
                ]}
              >
              More
              </Text>
            </TouchableOpacity>*/}
          </View>
        </View>
        <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10 }]}>
          {AllData.map((data: any, index: any) => {
            return (
              <View key={index} style={{ marginBottom: 5 }}>
                <Cardstyle4
                  name={data.name}
                  id={data.id}
                  image={data.image}
                  price={data.price}
                  countnumber={data.countnumber}
                  title={data.title}
                  onPress={() => navigation.navigate("ProductsDetails")}
                  onPress5={() => addItemToWishList(data)}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <Button
          title={"Upload File"}
          onPress={() => navigation.navigate("SingIn")}
          style={{ borderRadius: 52, marginLeft: 15, marginRight: 15 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notifactioncricle: {
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 2,
    right: 2,
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  TextInput: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    height: 60,
    borderRadius: 61,
    paddingHorizontal: 40,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    backgroundColor: "#FAFAFA",
    width: 270,
  },
  brandsubtitle2: {
    ...FONTS.fontSemiBold,
    fontSize: 12,
    color: COLORS.card,
  },
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
  title1: {
    ...FONTS.fontBold,
    fontSize: 28,
    color: COLORS.title,
  },
  title2: {
    ...FONTS.fontRegular,
    fontSize: 12,
    color: COLORS.title,
  },
  title3: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: "#8ABE12",
    //textAlign:'right'
  },
  colorCard: {},
  colorCardTitle: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
    lineHeight: 20,
    textAlign: "center",
  },
  arrivaldata: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    width: 199,
    paddingHorizontal: 10,
    paddingLeft: 25,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    shadowColor: "rgba(4,118,78,.6)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 18.27,
    elevation: 4,
  },
});

export default Home;
