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
} from "react-native";
import { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function OnBoarding({ navigate }) {
  return (
    <View>
      <Pressable
        style={styles.skipbutton}
        color="#5D5C66"
        onPress={() => navigate.navigate("SignIN")}
      >
        <Text style={styles.skiptext}>Skip</Text>
      </Pressable>
      <View>
        <Image
          style={{
            width: wp("55.55%"),
            height: hp("25%"),
            top: "24.38%",
            left: "22.22%",
            bottom: "50.62%",
            right: "22.22%",
          }}
          source={require("./Ellipse1.png")}
        />
        <Image
          style={{
            position: "absolute",
            width: wp("91.11%"),
            height: hp("30.625%"),
            left: 16,
            marginBottom: hp("100%"),
          }}
          source={require("./onB1.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skipbutton: {
    position: "absolute",
    width: wp("18.889%"),
    position: "relative",
    height: hp("12.375%"),
    top: 55,
    left: 312,
  },
  skiptext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: "#5D5C66",
    fontSize: 16,
    lineHeight: 19,
  },
});
