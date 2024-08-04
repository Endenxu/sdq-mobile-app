import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";

interface TableOddEvenProps {
  data: Array<{
    id: number;
    uniqueCode: string;
    name: string;
    description: string;
    path: string;
    folderID: number;
    fileTypeId: number;
    qrSettingId: number;
    uploadedBy: string;
    uploadDate: string;
    owner: string;
    ownerDepartment: number;
    ownerBranch: number;
    issuedFor: string;
    authRequiredFrom: string;
    isAuthorized: number;
    tagsString: string;
    organizationAccessLevel: number;
    externalAccessLevel: number;
    rejectMessage: string;
    isDeleted: boolean;
    ownerName: string;
    arabicOwnerName: string;
    departmentName: string;
    arabicDepartmentName: string;
    branchName: string;
    arabicBranchName: string;
    authRequiredFromName: string;
    arabicAuthRequiredFromName: string;
    accessLevel: number;
    ownedByMe: boolean;
    authRequiredByMe: boolean;
  }>;
  style?: any;
}

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductsDetails"
>;

const TableOddEven2: React.FC<TableOddEvenProps> = ({ data, style }) => {
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
          <View style={[styles.tableHeaderNumber]}>
            <Text
              style={[
                styles.theadItem,
                { color: colors.text, flex: 1, paddingLeft: 20 },
              ]}
            >
              #
            </Text>
          </View>
          <View style={[styles.tableHeader]}>
            <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
              Owner Name
            </Text>
          </View>
          <View style={[styles.tableHeader]}>
            <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
              File Name
            </Text>
          </View>
          <View style={[styles.statusHeader]}>
            <Text style={[styles.theadItem, { color: colors.text, flex: 1 }]}>
              Issued For
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
            <View style={[styles.tableContentNumber]}>
              <Text
                style={[
                  styles.tbodyItem,
                  { color: colors.title, flex: 1, paddingLeft: 10 },
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.uniqueCode}
              </Text>
            </View>
            <View style={[styles.tableContent]}>
              <Text
                style={[styles.tbodyItem, { color: colors.title, flex: 1 }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.ownerName}
              </Text>
            </View>
            <View style={[styles.tableContent]}>
              <Text
                style={[styles.tbodyItem, { color: colors.title, flex: 1 }]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </View>
            <View style={[styles.tableContent]}>
              {/* Assuming you want to display some status here */}
              {/* Use a placeholder if you don't have an image */}
              <Text
                style={[styles.tbodyItem, { color: colors.title, flex: 1 }]}
                numberOfLines={1}
                ellipsizeMode="tail"
                //</View>style={{ color: colors.title }}
              >
                {item.issuedFor}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  theadItem: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    ...FONTS.font,
    color: COLORS.text,
    borderColor: "#000000",
    fontSize: 8,
  },
  tbodyItem: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    ...FONTS.font,
    ...FONTS.fontMedium,
    color: COLORS.title,
    fontSize: 7,
  },
  tableHeader: {
    width: 90,
  },
  tableContent: {
    width: 90,
  },
  tableHeaderNumber: {
    width: 65,
  },
  tableContentNumber: {
    width: 65,
  },
  statusContent: {
    width: 60,
  },
  statusHeader: {
    width: 60,
  },
});

export default TableOddEven2;
