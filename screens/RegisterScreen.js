import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import AndroidSafeArea from "../AndroidSafeArea";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [clicked, setClicked] = useState(false);
  const navigation = useNavigation();
  const window = Dimensions.get("window");
  const height = window.height * window.scale;

  return (
    <View
      style={AndroidSafeArea.AndroidSafeArea}
      className="flex-1 bg-mainColor"
    >
      {/* logo */}
      <View className="items-center">
        <Image
          source={require("../assets/images/SportoZ.png")}
          className="h-7 w-28 top-7"
        />

       

        {/* player image */}
        <Image
          source={require("../assets/images/haaland.png")}
          className="top-16 mb-3"
        />
      </View>

      {/* text */}
      <View className="h-36 mt-7 px-4">
        <Text className="text-5xl text-white">
          <Text className="text-flashOrange">Discover</Text> all about sports
        </Text>
        <Text
          className="text-xs pt-2 leading-5"
          style={{
            color: "#B4B4B4",
          }}
        >
          Turpis phasellus in netus morbi massa. Integer dictum in neque,est
          egestas pharetra ut aliquam quisque. in neque, est. it egestas
          pharetra ut opt aliquam.
        </Text>
      </View>
      {/* signin and signup */}
      <View
        className={
          height > 2148
            ? "flex-row my-14 mx-4 space-x-2 items-center"
            : "flex-row my-10 mx-4 space-x-2 items-center"
        }
      >
        <TouchableOpacity
          className={
            !clicked
              ? "bg-flashOrange px-14 py-5 rounded-xl"
              : "px-14 py-5 rounded-xl"
          }
          onPress={() => {
            navigation.navigate("Home");
            setClicked(!clicked);
          }}
        >
          <Text className="font-[600] text-white text-lg"> Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={
            clicked
              ? "bg-flashOrange px-14 py-5 rounded-xl"
              : "px-14 py-5 rounded-xl"
          }
          onPress={() => {
            navigation.navigate("Home");
            setClicked(!clicked);
          }}
        >
          <Text className="font-[600] text-white text-lg"> Sign up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
