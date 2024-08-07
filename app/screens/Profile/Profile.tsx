import { useTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Header from "../../layout/Header";
import CustomFAB from "../../components/Button/CustomFAB";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";

type ProfileScreenProps = StackScreenProps<RootStackParamList, "Profile">;

const Profile = ({ navigation }: ProfileScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState<string>(IMAGES.blankperson);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        // Fetch Profile Info
        const response = await axios.get(
          "https://sdq-demo.azurewebsites.net/api/Account/ProfileInfo",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "*/*",
            },
          }
        );
        setProfile(response.data);

        // Fetch Profile Image
        const imageResponse = await axios.get(
          `https://sdq-demo.azurewebsites.net/api/Account/GetProfileImage/${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "*/*",
            },
            responseType: "arraybuffer", // Fetch the image as binary data
          }
        );

        const base64Image = `data:image/png;base64,${Buffer.from(
          imageResponse.data
        ).toString("base64")}`;
        setProfileImage(base64Image);
      }
    } catch (error) {
      Alert.alert("Error", "There was an error fetching your profile data.");
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProfileData();
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </View>
    );
  }

  if (!profile) {
    return <Text>Error fetching profile data</Text>;
  }

  const handleExpandToggle = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <View style={{ backgroundColor: colors.card, flex: 1 }}>
      <Header title="Profile" leftIcon={"back"} rightIcon2={"Edit"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            GlobalStyleSheet.container,
            { alignItems: "center", marginTop: 50, marginBottom: 5 },
          ]}
        >
          <View style={[styles.sectionimg]}>
            <Image
              style={{ height: 104, width: 104 }}
              source={{ uri: profileImage }}
              //source={IMAGES.blankperson}
              //source={profile.profileImage}
            />
          </View>
          <Text
            style={{ ...FONTS.fontSemiBold, fontSize: 23, color: colors.title }}
          >
            {profile.displayName || "N/A"}
          </Text>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 40, marginTop: 0 },
          ]}
        >
          <TouchableOpacity
            onPress={() => handleExpandToggle("phoneNumber")}
            style={styles.expandableSection}
          >
            <View
              style={[
                GlobalStyleSheet.flexcenter,
                {
                  width: "100%",
                  gap: 20,
                  justifyContent: "flex-start",
                  marginBottom: 0,
                  alignItems: "flex-start",
                },
              ]}
            >
              <View style={[styles.cardimg, { backgroundColor: colors.card }]}>
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: COLORS.primary },
                  ]}
                  source={IMAGES.call}
                />
              </View>
              <View>
                <Text style={[styles.brandsubtitle2, { color: "#7D7D7D" }]}>
                  Mobile Phone
                </Text>
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 16,
                    color: colors.title,
                    marginTop: 5,
                    overflow: "hidden",
                  }}
                  numberOfLines={expandedSection === "phoneNumber" ? 0 : 1}
                  ellipsizeMode="tail"
                >
                  {profile.phoneNumber || "N/A"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleExpandToggle("email")}
            style={styles.expandableSection}
          >
            <View
              style={[
                GlobalStyleSheet.flexcenter,
                {
                  width: "100%",
                  gap: 20,
                  justifyContent: "flex-start",
                  marginBottom: 0,
                  alignItems: "flex-start",
                },
              ]}
            >
              <View style={[styles.cardimg, { backgroundColor: colors.card }]}>
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: COLORS.primary },
                  ]}
                  source={IMAGES.email}
                />
              </View>
              <View style={{ width: "80%" }}>
                <Text style={[styles.brandsubtitle2, { color: "#7D7D7D" }]}>
                  Email Address
                </Text>
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 16,
                    color: colors.title,
                    marginTop: 5,
                    overflow: "hidden",
                  }}
                  numberOfLines={expandedSection === "email" ? 0 : 1}
                  ellipsizeMode="tail"
                >
                  {profile.email || "N/A"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleExpandToggle("jobTitle")}
            style={styles.expandableSection}
          >
            <View
              style={[
                GlobalStyleSheet.flexcenter,
                {
                  width: "100%",
                  gap: 20,
                  justifyContent: "flex-start",
                  marginBottom: 25,
                  alignItems: "flex-start",
                },
              ]}
            >
              <View style={[styles.cardimg, { backgroundColor: colors.card }]}>
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: COLORS.primary },
                  ]}
                  source={IMAGES.briefcase}
                />
              </View>
              <View>
                <Text style={[styles.brandsubtitle2, { color: "#7D7D7D" }]}>
                  Job Title
                </Text>
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 16,
                    color: colors.title,
                    marginTop: 5,
                  }}
                >
                  {profile.jobTitle || "N/A"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <CustomFAB onPress={() => navigation.navigate("UploadFile")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionimg: {
    height: 104,
    width: 104,
    borderRadius: 150,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
    marginBottom: 25,
  },
  brandsubtitle2: {
    ...FONTS.fontRegular,
    fontSize: 12,
  },
  cardimg: {
    height: 54,
    width: 54,
    borderRadius: 55,
    backgroundColor: COLORS.card,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 18.27,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  expandableSection: {
    marginBottom: 25,
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.primary,
    ...FONTS.fontMedium,
  },
});

export default Profile;
