import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Button, Alert } from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../layout/Header";

const TokenScreen = () => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      if (storedToken) {
        setToken(storedToken);
      } else {
        Alert.alert("Error", "No token found");
      }
    };

    getToken();
  }, []);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(token);
    Alert.alert("Copied to Clipboard", "The token has been copied.");
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Token Screen" leftIcon={"back"} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
        }}
      >
        <Text style={{ ...FONTS.h5, color: colors.title, marginBottom: 8 }}>
          Your Token:
        </Text>
        <Text
          style={{
            ...FONTS.fontRegular,
            color: colors.text,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          {token}
        </Text>
        <Button title="Copy Token" onPress={copyToClipboard} />
      </ScrollView>
    </View>
  );
};

export default TokenScreen;
