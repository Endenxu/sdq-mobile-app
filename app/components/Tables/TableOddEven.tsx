import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";

interface TableOddEvenProps {
  data: Array<{
    id: string;
    name: string;
    title: string;
    issuedfor: string;
    filedescription: string;
    authorizedby: string;
    date: string;
    status?: any;
  }>;
  style?: any;
}

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductsDetails"
>;

const TableOddEven: React.FC<TableOddEvenProps> = ({ data, style }) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <View
        style={{
          ...GlobalStyleSheet.card,
          backgroundColor: colors.card,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: colors.border,
          }}
        >
          {/* Table header */}
          <View style={[styles.tableHeader]}>
            <Text
              style={[
                styles.theadItem,
                { color: colors.text, flex: 1, paddingLeft: 15 },
              ]}
            >
              Name
            </Text>
          </View>
          <View style={[styles.tableHeader]}>
            <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
              Title
            </Text>
          </View>
          <View style={[styles.tableHeader]}>
            <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
              Issued For
            </Text>
          </View>

          {/*}
          <View style={[styles.tableHeader]}>
          <Text style={[styles.theadItem, { color: colors.text, flex: 2 }]}>
            File Description
          </Text>
          </View>
          <View style={[styles.tableHeader]}>
          <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
            Authorized By
          </Text>
          </View>
          
          <View style={[styles.tableHeader]}>
            <Text
              style={[
                styles.theadItem,
                {
                  color: colors.text,
                  flex: 1,
                  //textAlign: "right",
                  paddingRight: 15,
                },
              ]}
            >
              Date
            </Text>
          </View>
          */}
          <View style={[styles.statusHeader]}>
            <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
              Status
            </Text>
          </View>
        </View>

        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("ProductsDetails", { data: item })
            }
            style={[
              {
                flexDirection: "row",
                borderBottomWidth: 1,
                borderColor: colors.border,
              },
              index % 2 === 0 && { backgroundColor: colors.background },
            ]}
          >
            {/* TABLE CONTENTS */}
            <View style={[styles.tableContent]}>
              <Text
                style={[
                  styles.tbodyItem,
                  { color: colors.title, flex: 1, paddingLeft: 15 },
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </View>
            <View style={[styles.tableContent]}>
              <Text
                style={[styles.tbodyItem, { color: colors.title, flex: 1 }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
            </View>
            <View style={[styles.tableContent]}>
              <Text
                style={[styles.tbodyItem, { color: colors.title, flex: 1 }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.issuedfor}
              </Text>
            </View>
            {/*
            <View style={[styles.tableContent]}>
            <Text
              style={[styles.tbodyItem, { color: colors.title, flex: 2 }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.filedescription}
            </Text>
            </View>
            <View style={[styles.tableContent]}>
            <Text
              style={[styles.tbodyItem, { color: colors.title, flex: 1 }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.authorizedby}
            </Text>
            </View>
            
            <View style={[styles.tableContent, { width: 95 }]}>
              <Text
                style={[
                  styles.tbodyItem,
                  {
                    color: colors.title,
                    flex: 1,
                    textAlign: "right",
                    paddingRight: 15,
                  },
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.date}
              </Text>
            </View>
            */}
            <View style={[styles.statusContent]}>
              <Image
                style={{
                  height: 23,
                  width: "100%",
                  aspectRatio: 1 / 1,
                  borderRadius: 20,
                  marginTop: 12,
                  marginBottom: 8,
                  marginLeft: 20,
                  marginRight: 30,
                }}
                source={item.status}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  theadItem: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    ...FONTS.font,
    color: COLORS.text,
    //borderRightWidth: 1,
    borderColor: "#000000",
    fontSize: 11,
  },
  tbodyItem: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    ...FONTS.font,
    ...FONTS.fontMedium,
    color: COLORS.title,
    //borderRightWidth: 1,
    //borderColor: "#000000",
    fontSize: 8,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  tableHeader: {
    width: 90,
  },
  tableContent: {
    width: 90,
  },
  statusContent: {
    width: 60,
  },
  statusHeader: {
    width: 60,
  },
});

export default TableOddEven;
