import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import StandingList from "./StandingList";

const Standings = ({homeTeam, awayTeam}) => {
  const Header = () => {
    return (
      <View className=" flex-row ml-5 my-2">
        <View className="flex-1 flex-row space-x-10">
          <Text className="text-xs text-font-secondary"> POS </Text>
          <Text className="text-xs  text-font-secondary"> Team </Text>
        </View>
        <View className="flex-1 flex-row space-x-5 mr-9">
          <Text className="text-xs text-font-secondary"> P </Text>
          <Text className="text-xs text-font-secondary"> W </Text>
          <Text className="text-xs text-font-secondary"> D </Text>
          <Text className="text-xs text-font-secondary"> L </Text>
          <Text className="text-xs text-font-secondary"> PTS </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView className="flex-1 mt-5">
      <Header />
      <StandingList 
        team1 = {homeTeam}
        team2 = {awayTeam}
      />
    </ScrollView>
  );
};

export default Standings;

const styles = StyleSheet.create({});
