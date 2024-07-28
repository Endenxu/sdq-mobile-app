/*
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
import CustomFAB from "../../components/Button/CustomFAB";

type NotificationDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "NotificationDetails"
>;

const NotificationDetails = ({
  route,
  navigation,
}: NotificationDetailsScreenProps) => {
  const theme = useTheme();

  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);

  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        title="Notification Details"
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
          <Text style={{ marginTop: 20, color: colors.title }}>
            File Title: {data.title}
          </Text>
          <Text style={{ marginTop: 20, color: colors.title }}>
            To be authorized by: {data.authorizedby}
          </Text>
          <Text style={{ marginTop: 20, color: colors.title }}>
            Issued For: {data.issuedfor}
          </Text>
          <Text style={{ marginTop: 20, color: colors.title }}>
            Notes: {data.filedescription}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            GlobalStyleSheet.container,
            {
              backgroundColor: theme.dark
                ? "rgba(255,255,255,.1)"
                : colors.card,
              marginTop: 10,
              borderRadius: 15,
              height: 50,
            },
          ]}
        >
          <Text style={{ flex: 1, left: 80, color: colors.title }}>
            View the File Here
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={[
          GlobalStyleSheet.container,
          {
            paddingTop: 0,
            paddingHorizontal: 30,
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
            marginTop: 60,
          }}
        >
          <Button
            title={"Decline"}
            color={"#ff2c2c"}
            //color={#2b1b17}
            onPress={() => navigation.navigate("SingIn")}
            style={{ borderRadius: 15, width: 165 }}
          />
          <Button
            title={"Accept"}
            color={COLORS.primary}
            onPress={() => navigation.navigate("SingIn")}
            style={{ borderRadius: 15, width: 150 }}
          />
        </View>
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

export default NotificationDetails; */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Button from "../../components/Button/Button";
import Header from "../../layout/Header";

type NotificationDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "NotificationDetails"
>;

const NotificationDetails = ({
  route,
  navigation,
}: NotificationDetailsScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        title="Notification Details"
        leftIcon={"back"}
        rightIcon4={"home"}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            styles.cardContainer,
            {
              backgroundColor: theme.dark
                ? "rgba(255,255,255,.1)"
                : colors.card,
              elevation: theme.dark ? 0 : 5, // Disable elevation in dark mode
              shadowOpacity: theme.dark ? 0 : 0.25, // Disable shadow in dark mode
            },
          ]}
        >
          <View style={styles.headerContainer}>
            <View style={styles.imageborder}>
              <Image style={styles.image} source={data.image} />
            </View>
            <View style={styles.headerTextContainer}>
              <Text
                style={[styles.headerText, { color: colors.title }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {data.id}
              </Text>
              <Text
                style={[styles.headerText, { color: colors.title }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {data.name}
              </Text>
              <Text
                style={[styles.subText, { color: colors.text }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {data.date}
              </Text>
            </View>
            <Image style={styles.statusImage} source={data.status} />
          </View>
          <View
            style={[
              styles.detailContainer,
              {
                backgroundColor: theme.dark
                  ? "rgba(255,255,255,.1)"
                  : colors.card,
                elevation: theme.dark ? 0 : 5, // Disable elevation in dark mode
                shadowOpacity: theme.dark ? 0 : 0.25, // Disable shadow in dark mode
              },
            ]}
          >
            <Text
              style={[styles.detailText, { color: colors.title }]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              File Title: {"\n"}
              {data.title}
            </Text>
          </View>
          <View
            style={[
              styles.detailContainer,
              {
                backgroundColor: theme.dark
                  ? "rgba(255,255,255,.1)"
                  : colors.card,
                elevation: theme.dark ? 0 : 5, // Disable elevation in dark mode
                shadowOpacity: theme.dark ? 0 : 0.25, // Disable shadow in dark mode
              },
            ]}
          >
            <Text
              style={[styles.detailText, { color: colors.title }]}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              To be authorized by:{"\n"}
              {data.authorizedby}
            </Text>
          </View>
          <View
            style={[
              styles.detailContainer,
              {
                backgroundColor: theme.dark
                  ? "rgba(255,255,255,.1)"
                  : colors.card,
                elevation: theme.dark ? 0 : 5, // Disable elevation in dark mode
                shadowOpacity: theme.dark ? 0 : 0.25, // Disable shadow in dark mode
              },
            ]}
          >
            <Text
              style={[styles.detailText, { color: colors.title }]}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              Issued For:{"\n"}
              {data.issuedfor}
            </Text>
          </View>
          <View
            style={[
              styles.detailContainer,
              {
                backgroundColor: theme.dark
                  ? "rgba(255,255,255,.1)"
                  : colors.card,
                elevation: theme.dark ? 0 : 5, // Disable elevation in dark mode
                shadowOpacity: theme.dark ? 0 : 0.25, // Disable shadow in dark mode
              },
            ]}
          >
            <Text
              style={[styles.detailText, { color: colors.title }]}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              Notes:{"\n"}
              {data.filedescription}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            GlobalStyleSheet.container,
            styles.linkContainer,
            {
              backgroundColor: theme.dark
                ? "rgba(255,255,255,.1)"
                : colors.card,
              elevation: theme.dark ? 0 : 5, // Disable elevation in dark mode
              shadowOpacity: theme.dark ? 0 : 0.25, // Disable shadow in dark mode
            },
          ]}
        >
          <Text style={[styles.linkText, { color: colors.title }]}>
            View the File Here
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title={"Decline"}
          color={"#ff2c2c"}
          onPress={() => navigation.navigate("SingIn")}
          style={styles.button}
        />
        <Button
          title={"Accept"}
          color={COLORS.primary}
          onPress={() => navigation.navigate("SingIn")}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imageborder: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    height: 90,
    width: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 82,
    width: 82,
    borderRadius: 41,
  },
  headerTextContainer: {
    marginLeft: 20,
    flex: 1,
  },
  headerText: {
    ...FONTS.fontMedium,
    fontSize: 19,
    marginBottom: 5,
  },
  subText: {
    ...FONTS.fontRegular,
    fontSize: 12,
  },
  statusImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 2,
    position: "absolute",
    top: -10,
    right: 0,
  },
  detailContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  detailText: {
    ...FONTS.fontRegular,
    fontSize: 16,
  },
  linkContainer: {
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linkText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingBottom: 20,
    gap: 10,
  },
  button: {
    borderRadius: 15,
    width: 160,
    height: 55,
  },
});

export default NotificationDetails;
