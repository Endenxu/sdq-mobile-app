import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Image,
} from "react-native";
import Header from "../../layout/Header";
import { IMAGES } from "../../constants/Images";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeBox from "../../components/SwipeBox";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";

const SwipeData = [
  {
    id: "1234100",
    image: IMAGES.blankperson,
    name: "Khaled Smith",
    title: "Bank Document",
    status: IMAGES.new,
    issuedfor: "Hugh Tecson",
    filedescription: "Bank document for hugh",
    authorizedby: "Khaled Smith",
    date: "7/25/2024 12:31 PM",
  },
  {
    id: "1234200",
    image: IMAGES.blankperson,
    name: "Hugh Tecson",
    title: "QR",
    status: IMAGES.new,
    issuedfor: "Hugh Tecson",
    filedescription: "QR for hugh",
    authorizedby: "Khaled Smith",
    date: "7/24/2024 01:42 PM",
  },
  {
    id: "1234300",
    image: IMAGES.blankperson,
    name: "John Doe",
    title: "Code",
    status: IMAGES.new,
    issuedfor: "Hugh Tecson",
    filedescription: "Code Review for hugh",
    authorizedby: "Khaled Smith",
    date: "7/23/2024 02:43 PM",
  },
];

type NotificationScreenProps = StackScreenProps<
  RootStackParamList,
  "Notification"
>;

const Notification = ({ route, navigation }: NotificationScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [lists, setLists] = useState<any>(SwipeData);

  const deleteItem = (index: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  const handlePress = (data: any) => {
    navigation.navigate("NotificationDetails", { data });
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header title="Notifications" leftIcon="back" rightIcon4={"home"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View
          style={[GlobalStyleSheet.container, { padding: 0, paddingTop: 15 }]}
        >
          <GestureHandlerRootView style={{ paddingHorizontal: 15 }}>
            {lists.map((data: any, index: any) => {
              return (
                <View
                  style={{
                    marginBottom: 5,
                    marginHorizontal: -15,
                    paddingHorizontal: 15,
                  }}
                  key={index}
                >
                  <SwipeBox
                    data={data}
                    colors={colors}
                    handleDelete={() => deleteItem(index)}
                    onPress={() => handlePress(data)}
                  />
                </View>
              );
            })}
          </GestureHandlerRootView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;
