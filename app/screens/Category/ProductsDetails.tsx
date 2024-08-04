import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import { format, parseISO } from "date-fns";

// Details Screen from Home

type ProductsDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "ProductsDetails"
>;

const ProductsDetails = ({ route, navigation }: ProductsDetailsScreenProps) => {
  const theme = useTheme();

  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);

  const { data } = route.params;

  useEffect(() => {
    // Sample date string from your API
    const apiDateString = data.uploadDate;

    // Parse and format the date
    const parsedDate = parseISO(apiDateString);
    const formatted = format(parsedDate, "MMMM dd, yyyy HH:mm:ss");

    setFormattedDate(formatted);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Header title="Details" leftIcon={"back"} rightIcon4={"home"} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          paddingVertical: 0,
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
                {data.uniqueCode}
              </Text>
              <Text
                style={[styles.headerText, { color: colors.title }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {data.ownerName}
              </Text>
              <Text
                style={[styles.subText, { color: colors.text }]}
                //numberOfLines={1}
                //ellipsizeMode="tail"
              >
                {formattedDate || "Loading..."}
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
              File Name:{"\n"}
              {data.name}
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
              {data.authRequiredFromName}
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
              Issued For:{"\n"}
              {data.issuedFor}
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
              numberOfLines={4}
              ellipsizeMode="tail"
            >
              File Description:{"\n"}
              {data.description}
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
              numberOfLines={4}
              ellipsizeMode="tail"
            >
              Notes:{"\n"}
              {data.rejectMessage}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title={"Download"}
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
  buttonContainer: {
    padding: 30,
  },
  button: {
    borderRadius: 52,
  },
});

export default ProductsDetails;
