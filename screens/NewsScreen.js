import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AndroidSafeArea from "../AndroidSafeArea";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";

const NewsScreen = () => {
  const navigation = useNavigation();
  const {
    params: { title, image, description, published },
  } = useRoute();
  return (
    <ScrollView
      style={AndroidSafeArea.AndroidSafeArea}
      className="flex-1 bg-mainColor"
    >
      <View className="flex-row items-center px-4 py-3">
        <TouchableOpacity
          className="h-7 w-7 bg-secondary rounded-full items-center justify-center"
          onPress={() => navigation.goBack("Home")}
        >
          <ChevronLeftIcon size={17} color="#959595" strokeWidth={3} />
        </TouchableOpacity>

        <Text className="flex-1 text-white text-2xl text-center mt-3">
          News
        </Text>
      </View>
      <View className="items-center">
        <Image
          source={image}
          className="rounded-xl"
          style={{
            height: 180,
            width: 360,
            marginHorizontal: 8,
          }}
        />
        <View className="items-start justify-start px-4 py-3">
          <Text className="font-semibold text-white text-base leading-8">
            {title}
          </Text>
          <Text
            className="text-font-gray py-3"
            style={{
              fontSize: 10,
            }}
          >
            
            {published}
          </Text>
          <Text className='text-font-gray leading-6'
            style={{
                fontSize: 12
            }}
          >{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
