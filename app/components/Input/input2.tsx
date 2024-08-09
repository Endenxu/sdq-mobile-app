import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, SIZES, FONTS } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";

type Props = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  type?: "text" | "password";
  numberOfLines?: any;
  iconType?: "user" | "key";
  inputSm?: any;
  inputLg?: any;
  inputRounded?: any;
  style?: any;
  multiline?: boolean;
  backround?: any;
  keyboardType?: any;
  inputBorder?: any;
  text?: any;
  isFocused?: any;
};

const Input2 = ({
  placeholder,
  value,
  defaultValue,
  onChangeText,
  onFocus,
  onBlur,
  type = "text",
  numberOfLines,
  multiline,
  iconType,
  inputSm,
  inputLg,
  inputRounded,
  style,
  backround,
  inputBorder,
  text,
  keyboardType,
  isFocused,
}: Props) => {
  const [showPass, setShowPass] = useState<boolean>(true);
  const [focused, setFocused] = useState<boolean>(false);

  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const handleFocus = (e: any) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: any) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const renderIcon = () => {
    if (iconType === "user") {
      return <FeatherIcon name="user" size={18} color={COLORS.inputborder} />;
    }
    if (iconType === "key") {
      return <FeatherIcon name="key" size={18} color={COLORS.inputborder} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {!focused && iconType && (
        <View style={styles.iconContainer}>{renderIcon()}</View>
      )}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: backround ? colors.card : colors.input,
            color: colors.title,
            fontSize: backround ? 16 : 16,
          },
          numberOfLines && {
            height: "auto",
            paddingVertical: 14,
            textAlignVertical: "top",
          },
          !focused &&
            iconType && {
              paddingLeft: 48,
            },
          inputRounded && {
            borderRadius: 45,
          },
          inputSm && {
            height: 40,
          },
          inputLg && {
            height: 60,
          },
          inputBorder && {
            borderWidth: 2,
            borderRadius: 30,
            backgroundColor: theme.dark ? null : colors.card,
          },
          style && {
            ...style,
          },
          isFocused && {
            borderColor: COLORS.primary,
          },
        ]}
        multiline={multiline ? multiline : false}
        secureTextEntry={type === "password" ? showPass : false}
        value={value}
        placeholder={focused ? "" : placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        keyboardType={keyboardType}
        onBlur={handleBlur}
        numberOfLines={numberOfLines}
        placeholderTextColor={
          inputBorder
            ? COLORS.text
            : theme.dark
            ? "rgba(255,255,255,.5)"
            : "#666666"
        }
      />
      {text && (
        <View style={{ position: "absolute", top: 12, left: 35 }}>
          <Text
            style={[FONTS.fontRegular, { fontSize: 16, color: colors.title }]}
          >
            {text}
          </Text>
        </View>
      )}
      {type === "password" && (
        <TouchableOpacity
          style={[styles.passBtn, { height: backround ? 55 : 55 }]}
          onPress={() => setShowPass(!showPass)}
        >
          <FeatherIcon
            color={COLORS.primary}
            size={18}
            name={showPass ? "eye-off" : "eye"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    height: "100%",
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: COLORS.inputborder,
    zIndex: 25,
  },
  input: {
    ...FONTS.fontRegular,
    fontSize: 16,
    height: 55,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.inputborder,
    color: COLORS.title,
    textAlign: "center",
  },
  passBtn: {
    position: "absolute",
    right: 5,
    top: 0,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },
});

export default Input2;
