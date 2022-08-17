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
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Round from "./Round";
import Oneway from "./Oneway";
import Multi from "./Multi";
const Tab = createMaterialTopTabNavigator();
export default function Search({ navigate }) {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate("Homepage");
          }}
          style={styles.return}
        >
          <View>
            <Icon name="arrow-left" style={styles.returnbtn} />
            <Text style={styles.returntxt}>Search Flights</Text>
          </View>
        </TouchableOpacity>
        <View style={{ top: 155 }}>
          <Tab.Navigator>
            <Tab.Screen name="Round trip" component={Round} options={{}} />
            <Tab.Screen name="One-way" component={Oneway} />
            <Tab.Screen name="Multi-city" component={Multi} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  returntxt: {
    position: "absolute",
    fontFamily: "Rubik_300Light",
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
    top: 11,
    width: wp("46.67%"),
    height: hp("3.5%"),
  },
});
