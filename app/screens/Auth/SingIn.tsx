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
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Input2 from "../../components/Input/input2";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/Button/Button";
import { IMAGES } from "../../constants/Images";

type SingInScreenProps = StackScreenProps<RootStackParamList, "SingIn">;

const SingIn = ({ navigation }: SingInScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
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
        "https://sdq-demo.azurewebsites.net/api/Account/Login",
        {
          email: username,
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                GlobalStyleSheet.container,
                {
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 70,
                },
              ]}
            >
              <Image
                style={{ resizeMode: "contain", height: 200, width: 200 }}
                source={theme.dark ? IMAGES.onborder12 : IMAGES.onborder12}
              />
            </View>
            <View style={{ flexGrow: 1 }}>
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
                    <Input2
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChangeText={(value) => setUsername(value)}
                      isFocused={isFocused}
                      inputBorder
                      value={username}
                      iconType="user"
                      placeholder="Username"
                    />
                  </View>
                  <View style={[GlobalStyleSheet.container, { padding: 0 }]}>
                    <Text style={[styles.title3, { color: "#8A8A8A" }]}>
                      Password
                    </Text>
                  </View>
                  <View style={{ marginBottom: 10, marginTop: 10 }}>
                    <Input2
                      onFocus={() => setIsFocused2(true)}
                      onBlur={() => setIsFocused2(false)}
                      backround={colors.card}
                      onChangeText={(value) => setPassword(value)}
                      isFocused={isFocused2}
                      type={"password"}
                      placeholder="Password"
                      iconType="key"
                      inputBorder
                      value={password}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 65 }}>
                  {loading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                  ) : (
                    <Button
                      title={"LOGIN"}
                      onPress={handleSignIn}
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
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  title3: {
    ...FONTS.fontMedium,
    fontSize: 14,
    color: "#8A8A8A",
  },
});

export default SingIn;
