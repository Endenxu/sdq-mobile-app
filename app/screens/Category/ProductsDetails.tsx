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

type ProductsDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "ProductsDetails"
>;

const ProductsDetails = ({ route, navigation }: ProductsDetailsScreenProps) => {
  const theme = useTheme();

  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);

  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        title="Details"
        leftIcon={"back"}
        rightIcon4={"home"}
        //titleLeft
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          marginBottom: 30,
        }}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            {
              backgroundColor: theme.dark
                ? "rgba(255,255,255,.1)"
                : colors.card,
              marginTop: 10,
              borderRadius: 15,
              height: 350,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View style={{}}>
              <View style={styles.imageborder}>
                <Image
                  style={{ height: 82, width: 82, borderRadius: 50 }}
                  source={data.image}
                />
              </View>
            </View>
            <View>
              <Text
                style={[
                  FONTS.fontMedium,
                  { fontSize: 19, color: colors.title },
                ]}
              >
                {data.id}
              </Text>
              <Text
                style={[
                  FONTS.fontMedium,
                  { fontSize: 19, color: colors.title },
                ]}
              >
                {data.name}
              </Text>
              <Text
                style={[
                  FONTS.fontRegular,
                  { fontSize: 12, color: colors.text },
                ]}
              >
                {data.date}
              </Text>
            </View>
            <View>
              <View>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    marginLeft: 2,
                    bottom: 43,
                  }}
                  source={data.status}
                />
              </View>
            </View>
          </View>
          <Text style={{ marginTop: 20 }}>File Title: {data.title}</Text>
          <Text style={{ marginTop: 20 }}>
            To be authorized by: {data.authorizedby}
          </Text>
          <Text style={{ marginTop: 20 }}>Issued For: {data.issuedfor}</Text>
          <Text style={{ marginTop: 20 }}>Notes: {data.filedescription}</Text>
        </View>
      </ScrollView>
      <View
        style={[
          GlobalStyleSheet.container,
          { paddingTop: 0, paddingHorizontal: 30 },
        ]}
      >
        <Button
          title={"Download"}
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
  WriteIconBackground: {
    height: 42,
    width: 42,
    borderRadius: 40,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 60,
  },
  WriteIcon: {
    height: 36,
    width: 36,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  imageborder: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsDetails;
