import { View, Text } from "react-native";
import React from "react";

const StateBar = ({ type,title,  homeScore, awayScore }) => {
  return (
    <View className=" mx-8 my-4">
      <View className="flex-row justify-between">
        <Text style={{
          fontSize: 10
        }} className='text-bar-Color'>{type === "percent" ?  homeScore + "%" : homeScore}</Text>
        <Text className="text-xs bottom-2 text-font-secondary ">
          {title}
        </Text>
        <Text style={{
          fontSize: 10
        }} className='text-white'>{type === "percent" ? awayScore+ "%" : awayScore}</Text>
      </View>
      <View className="h-[5] bg-mainColor rounded-2xl overflow-hidden">
        <View className="absolute right-[50%] bg-bar-Color h-[5]  rounded-l-2xl" style={{
          width: `${homeScore/2}%`
        }}/>
        <View className="absolute left-[50%] bg-white right-2 h-[5]  rounded-r-2xl" style={{
          width: `${awayScore/2}%`
        }}/>
      </View>
    </View>
  );
};

export default StateBar;
