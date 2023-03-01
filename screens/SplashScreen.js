import { View, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import AndroidSafeArea from "../AndroidSafeArea";
import { useNavigation } from "@react-navigation/native";
const SplashScreen = () => {

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register')
    }, 3000)
  }, [])
  return (
    <View
      style={AndroidSafeArea.AndroidSafeArea}
      className="bg-mainColor flex-1 justify-center items-center"
    >
      <StatusBar
        animated={true}
        barStyle="light-content"
        translucent={true}
        backgroundColor="#13171A"
      />

      <Image source={require("../assets/images/SportoZ.png")} />
    </View>
  );
};

export default SplashScreen;

