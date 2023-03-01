import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { SignalIcon } from "react-native-heroicons/outline";

const LiveMatchCard = ({
  id,
  leagueName,
  leagueIcon,
  matchType,
  homeTeam,
  homeTeamIcon,
  homeTeamScore,
  awayTeam,
  awayTeamIcon,
  awayTeamScore,
  matchNo,
  timePlayed,
}) => {
  const min = "\u2032";

  return (
    <View className="h-[185] w-[344] bg-secondary mx-2 my-4 rounded-3xl">
      <View className="items-center justify-center">
        <ImageBackground
          source={leagueIcon}
          className="absolute h-[175] w-[195] top-3"
        />
      </View>
      <View className="flex-row items-center">
        <View className="flex-1">
          <Text className="font-bold text-white text-2xl px-6 py-2">
            {leagueName}
          </Text>
          <Text className="text-font-secondary text-xs px-6">
            Match {matchNo}
          </Text>
        </View>
        <View className="flex-row px-6 pb-2">
          <SignalIcon size={15} color="white" />
          <Text className="text-white" style={styles.font}> {matchType} </Text>
        </View>
      </View>
      <View className="flex-row items-center">
        {/* homeTeam */}
        <View className="flex-1 items-center">
          <Image source={homeTeamIcon} className="h-[53] w-[50] mt-4" />
          <Text className="text-xs text-white text-center"> {homeTeam} </Text>
          <Text className="text-font-secondary text-center pt-1" style={styles.font}>
            {" "}
            Home{" "}
          </Text>
        </View>
        {/* score */}
        <View className="items-center mt-4">
          <Text className="text-flashOrange text-5xl">
            {homeTeamScore} : {awayTeamScore}{" "}
          </Text>
          <View className="h-6 w-10 bg-font-secondary rounded-xl items-center justify-center mr-4 mt-2">
            <Text className="text-white text-center" style={styles.font}>
              {" "}
              {timePlayed}
              {min}
            </Text>
          </View>
        </View>
        {/* awayteam */}
        <View className="items-center">
          <Image source={awayTeamIcon} className="h-[53] w-[50] mx-8 mt-4" />
          <Text className="text-xs text-white text-center"> {awayTeam} </Text>
          <Text className="text-font-secondary text-center pt-1" style={styles.font}>
            {" "}
            Away{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  font:{
      fontSize:10
  }
})

export default LiveMatchCard;
