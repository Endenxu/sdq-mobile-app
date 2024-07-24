import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import Header from "../../layout/Header";
import CustomFAB from "../../components/Button/CustomFAB";

const profileData = [
  {
    id: "1",
    image: IMAGES.call,
    title: "Mobile Phone",
    subtitle: "+12 345 678 92",
  },
  {
    id: "2",
    image: IMAGES.email,
    title: "Email Address",
    subtitle: "example@gmail.com",
  },
  {
    id: "3",
    image: IMAGES.map,
    title: "Address",
    subtitle: "Franklin Avenue, Corner \n St. London, 24125151",
  },
];

type ProfileScreenProps = StackScreenProps<RootStackParamList, "Profile">;

const Profile = ({ navigation }: ProfileScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  return (
    <View style={{ backgroundColor: colors.card, flex: 1 }}>
      <Header title="Profile" leftIcon={"back"} rightIcon2={"Edit"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            { alignItems: "center", marginTop: 50, padding: 0 },
          ]}
        >
          <View style={[styles.sectionimg]}>
            <Image
              style={{ height: 104, width: 104 }}
              source={IMAGES.blankperson}
            />
          </View>
          <Text
            style={{ ...FONTS.fontSemiBold, fontSize: 28, color: colors.title }}
          >
            Khaled Smith
          </Text>
          <Text
            style={{
              ...FONTS.fontRegular,
              fontSize: 16,
              color: COLORS.primary,
            }}
          ></Text>
        </View>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 40, marginTop: 0 },
          ]}
        >
          <View>
            {profileData.map((data: any, index: any) => {
              return (
                <View
                  key={index}
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
                  <View
                    style={[styles.cardimg, { backgroundColor: colors.card }]}
                  >
                    <Image
                      style={[
                        GlobalStyleSheet.image3,
                        { tintColor: COLORS.primary },
                      ]}
                      source={data.image}
                    />
                  </View>
                  <View>
                    <Text style={[styles.brandsubtitle2, { color: "#7D7D7D" }]}>
                      {data.title}
                    </Text>
                    <Text
                      style={{
                        ...FONTS.fontMedium,
                        fontSize: 16,
                        color: colors.title,
                        marginTop: 5,
                      }}
                    >
                      {data.subtitle}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
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
  arrivaldata: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    //width:'100%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
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
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
  profilecard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginRight: 10,
    marginBottom: 20,
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
});

export default Profile;
