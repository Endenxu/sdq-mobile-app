import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import Header from "../../layout/Header";
import Button from "../../components/Button/Button";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";

const EditProfile = () => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState<string>(IMAGES.blankperson);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
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
      }
    };

    fetchProfileData();
  }, []);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri; // Correctly access the URI
      setSelectedImage(uri);
    }
  };

  const uploadImage = async (uri: string) => {
    const token = await AsyncStorage.getItem("authToken");
    const formData = new FormData();

    formData.append("file", {
      uri,
      type: "image/jpeg", // Adjust based on the image type
      name: "profile.jpg",
    } as any); // Cast to any to handle type issues

    try {
      await axios.post(
        "https://sdq-demo.azurewebsites.net/api/Account/UploadProficeImage",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Alert.alert("Success", "Profile image updated.");
    } catch (error) {
      Alert.alert("Error", "There was an error uploading the image.");
      console.error(error);
    }
  };

  const handleUpdateProfile = async () => {
    if (selectedImage) {
      await uploadImage(selectedImage);
    }
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

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Edit Profile" leftIcon="back" titleRight />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          marginBottom: 50,
        }}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            {
              backgroundColor: theme.dark
                ? "rgba(255,255,255,.1)"
                : colors.card,
              elevation: theme.dark ? 0 : 5,
              shadowOpacity: theme.dark ? 0 : 0.25,
              marginTop: 10,
              borderRadius: 15,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View>
              <View style={styles.imageborder}>
                <Image
                  style={{ height: 82, width: 82, borderRadius: 50 }}
                  source={{ uri: selectedImage || profileImage }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleImagePick}
                style={[
                  styles.WriteIconBackground,
                  { backgroundColor: colors.card },
                ]}
              >
                <View style={styles.WriteIcon}>
                  <Image
                    style={{
                      height: 16,
                      width: 16,
                      resizeMode: "contain",
                      tintColor: COLORS.card,
                    }}
                    source={IMAGES.write}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={[
                  FONTS.fontMedium,
                  { fontSize: 15, color: colors.title },
                ]}
              >
                {profile.displayName || "N/A"}
              </Text>
              <Text
                style={[
                  FONTS.fontRegular,
                  { fontSize: 12, color: colors.text },
                ]}
              >
                {profile.id || "N/A"}
              </Text>
            </View>
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
              elevation: theme.dark ? 0 : 5,
              shadowOpacity: theme.dark ? 0 : 0.25,
            },
          ]}
        >
          <Text style={[styles.linkText, { color: colors.title }]}>
            Change Password
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={[GlobalStyleSheet.container]}>
        <Button
          title="Update Profile"
          color={COLORS.primary}
          text={COLORS.card}
          onPress={handleUpdateProfile}
          style={{ borderRadius: 50 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageborder: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    height: 90,
    width: 90,
    borderRadius: 50,
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
  linkContainer: {
    borderRadius: 15,
    height: 60,
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
    marginTop: 20,
  },
  linkText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
});

export default EditProfile;
