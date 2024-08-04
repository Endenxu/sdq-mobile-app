import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS } from "../../constants/theme";
import { Feather, Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { openDrawer } from "../../redux/actions/drawerAction";
import CustomFAB from "../../components/Button/CustomFAB";
import FilterModal from "../../components/Modal/FilterModal";
import TableOddEven from "../../components/Tables/TableOddEven";
import TableOddEven2 from "../../components/Tables/TablerOddEven2";

const AllData = [
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
    folder: "Medical",
    branch: "Riyadh",
    filetype: "Contract",
    department: "Sales",
  },
];

const ActionData = [
  {
    icon: "log-out",
    title: "Login",
    sheet: "login",
  },
];

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: HomeScreenProps) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  // Modal use effect
  const [activeSheet, setActiveSheet] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(AllData.length / itemsPerPage);

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleLastPage = () => setCurrentPage(totalPages);

  const currentData = AllData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <View style={{ backgroundColor: colors.card, flex: 1, zIndex: 0 }}>
      <View style={{}}></View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 0, paddingTop: 7, paddingBottom: 0 },
          ]}
        >
          <View style={[GlobalStyleSheet.flex, { paddingHorizontal: 30 }]}>
            <Text
              style={[
                styles.brandsubtitle3,
                { fontSize: 15, color: colors.title },
              ]}
            >
              Displayed Files
            </Text>
          </View>
        </View>
        <View style={[GlobalStyleSheet.container, {}]}>
          <TableOddEven data={currentData} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            gap: 30,
            paddingBottom: 10,
            bottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={handleFirstPage}
            disabled={currentPage === 1}
          >
            <MaterialIcons
              name="first-page"
              size={24}
              color={currentPage === 1 ? colors.disabled : colors.title3}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <AntDesign
              name="left"
              size={16}
              color={currentPage === 1 ? colors.disabled : colors.title3}
              style={{ top: 3 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: colors.title3 }}>{currentPage}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <AntDesign
              name="right"
              size={16}
              color={
                currentPage === totalPages ? colors.disabled : colors.title3
              }
              style={{ top: 3 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLastPage}
            disabled={currentPage === totalPages}
          >
            <MaterialIcons
              name="last-page"
              size={24}
              color={
                currentPage === totalPages ? colors.disabled : colors.title3
              }
            />
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
  notifactioncricle: {
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 2,
    right: 2,
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  TextInput: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    height: 60,
    borderRadius: 61,
    paddingHorizontal: 40,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    backgroundColor: "#FAFAFA",
    width: 270,
  },
  brandsubtitle2: {
    ...FONTS.fontSemiBold,
    fontSize: 12,
    color: COLORS.card,
  },
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
  title1: {
    ...FONTS.fontBold,
    fontSize: 28,
    color: COLORS.title,
  },
  title2: {
    ...FONTS.fontRegular,
    fontSize: 12,
    color: COLORS.title,
  },
  title3: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: "#8ABE12",
    //textAlign:'right'
  },
  colorCard: {},
  colorCardTitle: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
    lineHeight: 20,
    textAlign: "center",
  },
  arrivaldata: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    width: 199,
    paddingHorizontal: 10,
    paddingLeft: 25,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    shadowColor: "rgba(4,118,78,.6)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 18.27,
    elevation: 4,
  },
});

export default Home;
