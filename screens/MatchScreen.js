import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AndroidSafeArea from "../AndroidSafeArea";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import LiveMatchCard from "../components/homeScreens/LiveMatchCard";
import MatchScore from "../components/matchScreen/MatchScore";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CategoryBar from "../components/matchScreen/CategoryBar";
import MatchDetails from "../components/matchScreen/MatchDetails";
import Standings from "../components/matchScreen/Standings";
import Timeline from "../components/matchScreen/Timeline";

const MatchScreen = () => {
  const {
    params: {
      id,
      leagueName,
      leagueIcon,
      matchType,
      stadiumName,
      homeTeam,
      homeTeamIcon,
      homeTeamScore,
      awayTeam,
      awayTeamIcon,
      awayTeamScore,
      matchDetails,
      timeLine,
      matchNo,
      timePlayed,
    },
  } = useRoute();
  const navigation = useNavigation();
  const [pressed, setPressed] = useState({
    matchDetails: true,
    timeLine: false,
    standings: false,
  });

  return (
    <View
      style={AndroidSafeArea.AndroidSafeArea}
      className="flex-1 bg-mainColor"
    >
      <View className="flex-row items-center px-4 py-5">
        <TouchableOpacity
          className="h-7 w-7 bg-secondary rounded-full items-center justify-center"
          onPress={() => navigation.goBack("Home")}
        >
          <ChevronLeftIcon size={17} color="#959595" strokeWidth={3} />
        </TouchableOpacity>

        <Text className="flex-1 text-white text-2xl text-center">
          {leagueName}
        </Text>
      </View>
      <View className="flex-1 bg-secondary mx-4 mt-2 rounded-t-3xl">
        <MatchScore
          key={id}
          id={id}
          stadiumName={stadiumName}
          leagueIcon={leagueIcon}
          matchType={matchType}
          homeTeam={homeTeam}
          homeTeamIcon={homeTeamIcon}
          homeTeamScore={homeTeamScore}
          awayTeam={awayTeam}
          awayTeamIcon={awayTeamIcon}
          awayTeamScore={awayTeamScore}
          matchNo={matchNo}
          timePlayed={timePlayed}
        />
        <CategoryBar key={pressed} pressed={pressed} setPressed={setPressed} />

        {pressed.matchDetails ? (
          <MatchDetails matchDetails={matchDetails}/>
        ) : pressed.timeLine ? (
          <Timeline timeLine={timeLine}/>
        ) : (
          <Standings homeTeam={homeTeam} awayTeam={awayTeam} />
        )}
      </View>
    </View>
  );
};

export default MatchScreen;
