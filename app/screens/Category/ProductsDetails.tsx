import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Button from "../../components/Button/Button";
import Header from "../../layout/Header";
import { IMAGES } from "../../constants/Images";
import { format, parseISO } from "date-fns";
import axios from "axios";
import { Buffer } from "buffer";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProductsDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "ProductsDetails"
>;

const ProductsDetails = ({ route, navigation }: ProductsDetailsScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string>(IMAGES.blankperson);
  const [loading, setLoading] = useState(true);

  const { data } = route.params;

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          // Fetch the user list
          const userListResponse = await axios.get(
            `https://sdq-demo.azurewebsites.net/api/Users/GetUsersList`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                accept: "*/*",
              },
            }
          );

          const userList = userListResponse.data;

          // Find the user whose displayName matches the ownerName or authRequiredFromName
          const matchedUser = userList.find(
            (user: any) =>
              user.displayName === data.ownerName ||
              user.displayName === data.authRequiredFromName
          );

          if (matchedUser) {
            const userId = matchedUser.id;

            // Fetch the profile image using the matched userId
            const imageResponse = await axios.get(
              `https://sdq-demo.azurewebsites.net/api/Users/GetUserProfileImage/${userId}/${token}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  accept: "*/*",
                },
                responseType: "arraybuffer",
              }
            );
            const base64Image = `data:image/png;base64,${Buffer.from(
              imageResponse.data
            ).toString("base64")}`;
            setProfileImage(base64Image);
          } else {
            // If no match is found, use the fallback image
            setProfileImage(IMAGES.blankperson);
          }
        }
      } catch (error) {
        Alert.alert("Error", "There was an error fetching the profile image.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const apiDateString = data.uploadDate;
    const parsedDate = parseISO(apiDateString);
    const formatted = format(parsedDate, "MMMM dd, yyyy HH:mm:ss");
    setFormattedDate(formatted);

    fetchProfileImage();
  }, [data.ownerName, data.authRequiredFromName, data.uploadDate]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

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
              elevation: theme.dark ? 0 : 5,
              shadowOpacity: theme.dark ? 0 : 0.25,
            },
          ]}
        >
          <View style={styles.headerContainer}>
            <View style={styles.imageborder}>
              <Image
                style={styles.image}
                source={{ uri: profileImage }}
                onError={() => {
                  console.log(
                    "Image failed to load, setting to fallback image."
                  );
                  setProfileImage(IMAGES.blankperson); // Fallback image
                }}
              />
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
              <Text style={[styles.subText, { color: colors.text }]}>
                {formattedDate || "Loading..."}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.detailContainer,
              {
                backgroundColor: theme.dark
                  ? "rgba(255,255,255,.1)"
                  : colors.card,
                elevation: theme.dark ? 0 : 5,
                shadowOpacity: theme.dark ? 0 : 0.25,
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
                elevation: theme.dark ? 0 : 5,
                shadowOpacity: theme.dark ? 0 : 0.25,
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
                elevation: theme.dark ? 0 : 5,
                shadowOpacity: theme.dark ? 0 : 0.25,
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
                elevation: theme.dark ? 0 : 5,
                shadowOpacity: theme.dark ? 0 : 0.25,
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
          {data.rejectMessage ? (
            <View
              style={[
                styles.detailContainer,
                {
                  backgroundColor: theme.dark
                    ? "rgba(255,255,255,.1)"
                    : colors.card,
                  elevation: theme.dark ? 0 : 5,
                  shadowOpacity: theme.dark ? 0 : 0.25,
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
          ) : null}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title={"Download"}
          color={COLORS.primary}
          //onPress={() => navigation.navigate("SignIn")}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  loadingText: {
    marginTop: 10,
    color: COLORS.text,
  },
});

export default ProductsDetails;
