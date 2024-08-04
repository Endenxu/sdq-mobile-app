import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  Alert,
  RefreshControl,
  ActivityIndicator,
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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

  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (!token) {
        Alert.alert("Authentication Error", "You need to log in first.");
        return;
      }

      const response = await axios.get(
        "https://sdq-demo.azurewebsites.net/api/Files/GetFiles",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const sortedData = response.data.sort(
        (a: any, b: any) =>
          new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
      );
      setData(sortedData);
    } catch (error) {
      Alert.alert(
        "Error fetching data",
        "There was an issue fetching the data. Please try again later."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  // Modal use effect
  const [activeSheet, setActiveSheet] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleLastPage = () => setCurrentPage(totalPages);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <View style={{ backgroundColor: colors.card, flex: 1, zIndex: 0 }}>
      <View style={{}}>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingHorizontal: 30, padding: 0, paddingTop: 30 },
          ]}
        >
          <View style={[GlobalStyleSheet.flex]}>
            <View>
              <Text
                style={{
                  ...FONTS.fontRegular,
                  fontSize: 14,
                  color: colors.title,
                }}
              >
                Good Day
              </Text>
              <Text
                style={{
                  ...FONTS.fontSemiBold,
                  fontSize: 24,
                  color: colors.title,
                }}
              >
                Khaled
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
                activeOpacity={0.5}
                style={[GlobalStyleSheet.background3, {}]}
              >
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                  ]}
                  source={IMAGES.Notification}
                />
                <View
                  style={[
                    styles.notifactioncricle,
                    {
                      backgroundColor: colors.card,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 13,
                      width: 13,
                      borderRadius: 13,
                      backgroundColor: COLORS.primary,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                //onPress={() => navigation.openDrawer()}
                onPress={() => dispatch(openDrawer())}
                style={[GlobalStyleSheet.background3, {}]}
              >
                <Image
                  style={[
                    GlobalStyleSheet.image3,
                    { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                  ]}
                  source={IMAGES.grid6}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={true}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 0, paddingHorizontal: 30, paddingTop: 10 },
          ]}
        >
          <View>
            <TextInput
              placeholder="Search"
              style={[
                styles.TextInput,
                { color: COLORS.title, backgroundColor: "#FAFAFA" },
              ]}
              placeholderTextColor={"#929292"}
            />
            <View style={{ position: "absolute", top: 15, right: 50 }}>
              <Feather name="search" size={24} color={"#C9C9C9"} />
            </View>

            <View style={{ bottom: 60 }}>
              <View>
                {ActionData.map((data: any, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{ position: "absolute", top: 15, right: -10 }}
                    >
                      <Feather
                        name="filter"
                        size={24}
                        color={"#5F5F5F"}
                        onPress={() => {
                          {
                            setActiveSheet(data.sheet);
                            setModalVisible(true);
                          }
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    position: "relative",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      setModalVisible(true);
                    }}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,.3)",
                    }}
                  />
                  <FilterModal close={setModalVisible} />
                </View>
              </Modal>
            </View>
          </View>
        </View>

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
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <TableOddEven2 data={currentData} />
          )}
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
