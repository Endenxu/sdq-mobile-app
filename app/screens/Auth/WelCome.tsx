import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import React from "react";
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={IMAGES.sdqmain}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={[
              GlobalStyleSheet.container,
              { padding: 0, marginTop: 60, flex: 1 },
            ]}
          ></View>
          <LinearGradient colors={["rgba(4,118,78,0)", "rgba(4,118,78,.5)"]}>
            <View
              style={[
                GlobalStyleSheet.container,
                { paddingHorizontal: 35, paddingBottom: 35 },
              ]}
            >
              <Text style={[styles.title, { color: COLORS.card }]}>
                Welcome!
              </Text>
              <View style={{ marginBottom: 0 }}>
                <SocialBtn
                  text="Login with email"
                  color={COLORS.primary}
                  textcolor={COLORS.card}
                  rounded
                  icon={
                    <FontAwesome
                      name="envelope"
                      size={22}
                      color={COLORS.card}
                    />
                  }
                  border={COLORS.primary}
                  onpress={() => navigation.navigate("SingIn")}
                />
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    textAlign: "center",
    paddingHorizontal: 30,
    paddingBottom: 90,
  },
});

export default WelCome;
