/*
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Input from "../../components/Input/Input";
import { IMAGES } from "../../constants/Images";
import Button from "../../components/Button/Button";
import axios from "axios";
//import AsyncStorage from "@react-native-async-storage/async-storage";

type SingInScreenProps = StackScreenProps<RootStackParamList, "SingIn">;

const SingIn = ({ navigation }: SingInScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!username || !password) {
      Alert.alert(
        "Validation Error",
        "Please enter both username and password"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://your-api-url.com/api/auth/login",
        {
          username,
          password,
        }
      );

      setLoading(false);

      if (response.data.success) {
        //await AsyncStorage.setItem('authToken', response.data.token);
        Alert.alert("Success", "Logged in successfully");
        navigation.navigate("DrawerNavigation", { screen: "Home" });
        // Store the authentication token if necessary
      } else {
        Alert.alert(
          "Authentication Error",
          response.data.message || "Failed to login"
        );
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("Network Error", "Failed to connect to the server");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.card }}>
      <View
        style={[
          GlobalStyleSheet.container,
          {
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 50,
          },
        ]}
      >
        <Image
          style={{ resizeMode: "contain", height: 80, width: 150 }}
          source={theme.dark ? IMAGES.sdqnobg : IMAGES.sdqnobg}
        />
      </View>
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              flexGrow: 1,
              paddingBottom: 0,
              paddingHorizontal: 30,
              paddingTop: 0,
            },
          ]}
        >
          <View style={{}}>
            <View style={{ marginBottom: 10 }}>
              <Text style={[styles.title1, { color: colors.title }]}>
                Sign In
              </Text>
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text style={[styles.title3, { color: "#8A8A8A" }]}>
                Username or Email
              </Text>
            </View>
            <View style={{ marginBottom: 20, marginTop: 10 }}>
              <Input
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                onChangeText={(value) => console.log(value)}
                isFocused={isFocused}
                inputBorder
                defaultValue="Khaled"
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text style={[styles.title3, { color: "#8A8A8A" }]}>
                Password
              </Text>
            </View>
            <View style={{ marginBottom: 10, marginTop: 10 }}>
              <Input
                onFocus={() => setisFocused2(true)}
                onBlur={() => setisFocused2(false)}
                backround={colors.card}
                onChangeText={(value) => console.log(value)}
                isFocused={isFocused2}
                type={"password"}
                inputBorder
                defaultValue="123456789"
              />
            </View>
          </View>
          <View style={{ marginTop: 220 }}>
            <Button
              title={"LOGIN"}
              onPress={() =>
                navigation.navigate("DrawerNavigation", { screen: "Home" })
              }
              style={{ borderRadius: 52 }}
            />
            <View
              style={[
                GlobalStyleSheet.flex,
                {
                  marginBottom: 20,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  justifyContent: "flex-start",
                  gap: 5,
                },
              ]}
            >
              <Text style={[styles.text, { color: colors.title }]}>
                Forgot Password?
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: COLORS.primary,
                  }}
                >
                  Reset here
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 15 }}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.fontRegular,
    fontSize: 14,
    color: COLORS.title,
    paddingLeft: 24,
  },
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
});

export default SingIn; */

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Input from "../../components/Input/Input";
import { IMAGES } from "../../constants/Images";
import Button from "../../components/Button/Button";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Uncommented for token storage

type SingInScreenProps = StackScreenProps<RootStackParamList, "SingIn">;

const SingIn = ({ navigation }: SingInScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [isFocused, setisFocused] = useState(false);
  const [isFocused2, setisFocused2] = useState(false);

  const [username, setUsername] = useState(""); // For capturing username
  const [password, setPassword] = useState(""); // For capturing password
  const [loading, setLoading] = useState(false); // For handling loading state

  const handleSignIn = async () => {
    if (!username || !password) {
      Alert.alert(
        "Validation Error",
        "Please enter both username and password"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://sdq-demo.azurewebsites.net/api/Account/Login", // Replace with your API URL
        {
          email: username, // Assuming the API expects 'email'
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
        }
      );

      setLoading(false);

      if (response.data.token) {
        // Checking if token is present
        await AsyncStorage.setItem("authToken", response.data.token);
        Alert.alert("Success", "Logged in successfully");
        navigation.navigate("DrawerNavigation", { screen: "Home" });
      } else {
        Alert.alert(
          "Authentication Error",
          response.data.message || "Failed to login"
        );
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("Network Error", "Failed to connect to the server");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.card }}>
      <View
        style={[
          GlobalStyleSheet.container,
          {
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 50,
          },
        ]}
      >
        <Image
          style={{ resizeMode: "contain", height: 80, width: 150 }}
          source={theme.dark ? IMAGES.sdqnobg : IMAGES.sdqnobg}
        />
      </View>
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={[
            GlobalStyleSheet.container,
            {
              flexGrow: 1,
              paddingBottom: 0,
              paddingHorizontal: 30,
              paddingTop: 0,
            },
          ]}
        >
          <View style={{}}>
            <View style={{ marginBottom: 10 }}>
              <Text style={[styles.title1, { color: colors.title }]}>
                Sign In
              </Text>
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text style={[styles.title3, { color: "#8A8A8A" }]}>
                Username or Email
              </Text>
            </View>
            <View style={{ marginBottom: 20, marginTop: 10 }}>
              <Input
                onFocus={() => setisFocused(true)}
                onBlur={() => setisFocused(false)}
                onChangeText={(value) => setUsername(value)} // Capture username input
                isFocused={isFocused}
                inputBorder
                value={username} // Bind input value
              />
            </View>
            <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
              <Text style={[styles.title3, { color: "#8A8A8A" }]}>
                Password
              </Text>
            </View>
            <View style={{ marginBottom: 10, marginTop: 10 }}>
              <Input
                onFocus={() => setisFocused2(true)}
                onBlur={() => setisFocused2(false)}
                backround={colors.card}
                onChangeText={(value) => setPassword(value)} // Capture password input
                isFocused={isFocused2}
                type={"password"}
                inputBorder
                value={password} // Bind input value
              />
            </View>
          </View>
          <View style={{ marginTop: 220 }}>
            {loading ? ( // Show loader while the request is in progress
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : (
              <Button
                title={"LOGIN"}
                onPress={handleSignIn} // Trigger login function
                style={{ borderRadius: 52 }}
              />
            )}
            <View
              style={[
                GlobalStyleSheet.flex,
                {
                  marginBottom: 20,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  justifyContent: "flex-start",
                  gap: 5,
                },
              ]}
            >
              <Text style={[styles.text, { color: colors.title }]}>
                Forgot Password?
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: COLORS.primary,
                  }}
                >
                  Reset here
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 15 }}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.fontRegular,
    fontSize: 14,
    color: COLORS.title,
    paddingLeft: 24,
  },
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
});

export default SingIn;
