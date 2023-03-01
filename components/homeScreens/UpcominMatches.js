import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { upcomingMatch } from "../../dummy";

const UpcominMatches = () => {
  return (
    <View>
      <View className="flex-row items-center">
        <Text className="flex-1 text-base text-white px-6 py-3">
          Upcoming Matches
        </Text>
        <TouchableOpacity>
          <Text className="text-sm text-flashOrange px-4">See All</Text>
        </TouchableOpacity>
      </View>
      <View className="mx-3">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={upcomingMatch}
          renderItem={({ item }) => {
            return (
              <View className="h-[123] w-[226] bg-secondary mx-2 my-2 rounded-xl">
                <View className="items-center justify-center">
                  <ImageBackground
                    source={item.leagueIcon}
                    className={
                      item.leagueName === "Champions League"
                        ? "absolute h-[100] w-[80] top-3 opacity-10"
                        : "absolute h-[100] w-[80] top-3"
                    }
                  />
                </View>
                <View className="flex-row items-center">
                  <Text className="flex-1 font-bold text-white px-3 py-2">
                    {item.leagueName}
                  </Text>
                  <Text className="text-xs text-font-secondary px-2">
                    {" "}
                    {item.timeReamin}
                  </Text>
                </View>
                <View className="flex-row space-x-2 py-1 items-center justify-center ">
                  <View className="items-center">
                    <Image source={item.homeTeamIcon} />
                    <Text
                      className="text-white text-center pt-1"
                      style={{
                        fontSize: 10,
                      }}
                    >
                      {item.homeTeam}
                    </Text>
                  </View>
                  <Text className="text-font-secondary pb-3"> v/s </Text>
                  <View className="items-center">
                    <Image source={item.awayTeamIcon} />
                    <Text
                      className="text-white text-center pt-1"
                      style={{
                        fontSize: 10,
                      }}
                    >
                      {item.awayTeam}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default UpcominMatches;
