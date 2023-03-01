import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { SignalIcon } from "react-native-heroicons/outline";


const MatchScore = ({
  id,
  stadiumName,
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
    <>
      <View className="items-center justify-center">
        <ImageBackground
          source={leagueIcon}
          className="absolute h-[190] w-[220] top-3"
        />
      </View>
      <View className="flex-row items-center">
        <View className="flex-1">
          <Text className="font-bold text-white text-lg px-6 py-2">
            {stadiumName}
          </Text>
          <Text className="text-font-secondary text-xs px-6">
            Match {matchNo}
          </Text>
        </View>
        <View className="flex-row px-6 pb-2 space-x-1">
          <SignalIcon size={15} color="white" />
          <Text className=" text-white"
          style={styles.font}> {matchType} </Text>
        </View>
      </View>
      <View className="flex-row items-center">
        {/* homeTeam */}
        <View className="flex-1 items-center">
          <Image source={homeTeamIcon} className="h-[53] w-[50] mx-8 mt-4" />
          <Text className="font-bold text-xs text-white text-center"> {homeTeam} </Text>
          <Text className="text-font-secondary text-center pt-1" style={styles.font}>
            {" "}
            Home{" "}
          </Text>
        </View>
        {/* score */}
        <View className="items-center mr-2.5 mt-5">
          <Text className="text-flashOrange text-5xl">
            {homeTeamScore} : {awayTeamScore}{" "}
          </Text>
          <View className="h-6 w-10 bg-font-secondary rounded-xl items-center justify-center mr-3 mt-2">
            <Text className="font-semibold text-white text-center" style={styles.font}>
              {" "}
              {timePlayed}
              {min}
            </Text>
          </View>
        </View>
        {/* awayteam */}
        <View className="items-center">
          <Image source={awayTeamIcon} className="h-[53] w-[50] mx-8 mt-4" />
          <Text className="font-bold text-xs text-white text-center mt-2.5"> {awayTeam} </Text>
          <Text className="text-xs text-font-secondary text-center pt-1">
            {" "}
            Away{" "}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    font:{
        fontSize:10
    }
})

export default MatchScore;
