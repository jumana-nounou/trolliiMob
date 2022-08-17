import * as React from "react";
import {
  View,
  Button,
  Text,
  Animated,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
  ImageBackgroundBase,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Round({ navigate }) {
  return (
    <View>
      <Text style={styles.fromtxt}>From</Text>
      <TextInput style={styles.frombox} />
      <Text style={styles.totxt}>To</Text>
      <TextInput style={styles.tobox} />
      <Button title="find" />

      <Text style={styles.Deptxt}>Departure</Text>
      <TextInput style={styles.depbox} />
      <Text style={styles.returntxt}>Return</Text>
      <TextInput style={styles.returnbox} />
      <Pressable style={styles.searchbtn}>
        <Text style={styles.searchtxt}>Search Flights</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fromtxt: {
    position: "absolute",
    fontFamily: "Rubik",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: "17",
    letterSpacing: -0.3,
    fontStyle: "normal",
    color: "#5D5C66",
    left: 19,
    top: 214,
    width: wp("9.72%"),
    height: hp("2.125%"),
  },
  frombox: {
    position: "absolute",
    width: wp("91.11%"),
    height: hp("6%"),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    left: 16,
    top: 239,
  },
  totxt: {
    position: "absolute",
    fontFamily: "Rubik",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: "17",
    letterSpacing: -0.3,
    fontStyle: "normal",
    color: "#5D5C66",
    left: 19,
    top: 299,
    width: wp("9.72%"),
    height: hp("2.125%"),
  },
  tobox: {
    position: "absolute",
    width: wp("91.11%"),
    height: hp("6%"),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    left: 16,
    top: 324,
  },
  Deptxt: {
    position: "absolute",
    fontFamily: "Rubik",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: "17",
    letterSpacing: -0.3,
    fontStyle: "normal",
    color: "#5D5C66",
    left: 19,
    top: 388,
    width: wp("29.72%"),
    height: hp("2.125%"),
  },
  depbox: {
    position: "absolute",
    width: wp("43.33%"),
    height: hp("6%"),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    left: 16,
    top: 413,
  },
  returntxt: {
    position: "absolute",
    fontFamily: "Rubik",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: "17",
    letterSpacing: -0.3,
    fontStyle: "normal",
    color: "#5D5C66",
    left: 191,
    top: 388,
    width: wp("29.72%"),
    height: hp("2.125%"),
  },
  returnbox: {
    position: "absolute",
    width: wp("43.33%"),
    height: hp("6%"),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    left: 188,
    top: 413,
  },
  searchbtn: {
    position: "absolute",
    width: wp("91.11%"),
    height: hp("6%"),
    borderRadius: 15,
    left: 16,
    top: 535,
    backgroundColor: "#6546BF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
  },
  searchtxt: {
    position: "absolute",
    fontFamily: "Rubik",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: "19",
    letterSpacing: -0.3,
    fontStyle: "normal",
    color: "white",
    width: wp("41.11%"),
    height: hp("3.325%"),
    top: 15,
    left: 108,
  },
});
