import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { liveMatch } from "../../dummy";
import { SignalIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import LiveMatchCard from "./LiveMatchCard";

const LiveMatches = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-base text-white px-4 py-4"> Live Matches </Text>
      <View className="mx-2">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={liveMatch}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push("Match", {
                    ...item,
                  })
                }
              >
                <LiveMatchCard
                  key={item.id}
                  id={item.id}
                  leagueName={item.leagueName}
                  leagueIcon={item.leagueIcon}
                  matchType={item.matchType}
                  homeTeam={item.homeTeam}
                  homeTeamIcon={item.homeTeamIcon}
                  homeTeamScore={item.homeTeamScore}
                  awayTeam={item.awayTeam}
                  awayTeamIcon={item.awayTeamIcon}
                  awayTeamScore={item.awayTeamScore}
                  matchNo={item.matchNo}
                  timePlayed={item.timePlayed}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default LiveMatches;
