import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { useTheme } from "@react-navigation/native";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import SocialBtn from "../../components/Socials/SocialBtn";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type WelComeScreenProps = StackScreenProps<RootStackParamList, "WelCome">;

const WelCome = ({ navigation }: WelComeScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <View style={{ flex: 1, backgroundColor: colors.card }}>
      {/*<Image style={styles.welcomeimage} source={IMAGES.welcome} />*/}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 0, marginTop: 60, flex: 1 },
          ]}
        >
          <Image
            style={{
              height: 350,
              width: 350,
              zIndex: 99,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "contain",
              flex: 1,
              left: 6,
              bottom: 1,
            }}
            source={IMAGES.sdqnobg}
          />
        </View>
        <LinearGradient colors={["rgba(4,118,78,0)", "rgba(4,118,78,.5)"]}>
          <View
            style={[
              GlobalStyleSheet.container,
              { paddingHorizontal: 35, paddingBottom: 35 },
            ]}
          >
            <Text style={[styles.title, { color: colors.title }]}>
              Welcome to SDQ!
            </Text>
            <View style={{ marginBottom: 0 }}>
              <SocialBtn
                text="Login with email"
                color={COLORS.primary}
                textcolor={COLORS.card}
                rounded
                icon={
                  <FontAwesome name="envelope" size={22} color={COLORS.card} />
                }
                border={COLORS.primary}
                onpress={() => navigation.navigate("SingIn")}
              />
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeimage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: COLORS.title,
    textAlign: "center",
    paddingHorizontal: 30,
    paddingBottom: 90,
  },
});

export default WelCome;
