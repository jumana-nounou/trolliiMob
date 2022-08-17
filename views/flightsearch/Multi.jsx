import * as React from "react";
import {
  View,
  Button,
  Text,
  Animated,
  Image,
  StyleSheet,
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

export default function Multi({ navigate }) {
  return <View></View>;
}

const styles = StyleSheet.create({
  returntxt: {
    position: "absolute",
    fontFamily: "Rubik",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: "28",
    letterSpacing: -0.3,
    fontStyle: "normal",
    color: "#362566",
    left: 58,
    top: 79,
  },
  return: {
    color: "#362566",
    fontSize: 20,
  },
  returnbtn: {
    position: "absolute",
    color: "#362566",
    fontSize: 20,
    left: 16,
    top: 79,
    width: wp("46.67%"),
    height: hp("3.5%"),
  },
});
