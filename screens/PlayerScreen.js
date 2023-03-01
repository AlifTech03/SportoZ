import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AndroidSafeArea from "../AndroidSafeArea";
import Chart from "../components/playerScreen/Chart";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import RadarChart from "../components/playerScreen/RadarChart";

const PlayerScreen = () => {
  const navigation = useNavigation();

  const [nextGame, setNextGame] = useState({});

  const {
    params: {
      id,
      playerFName,
      playerLName,
      playerImage,
      clubName,
      clubRating,
      clubIcon,
      leagueName,
      leagueIcon,
      countryIcon,
      gamesPlayed,
      scoreGoals,
      position,
      nextGames,
    },
  } = useRoute();

  useEffect(() => {
    const now = new Date();

    let closest = Infinity;

    nextGames.forEach((d) => {
      const date = new Date(d.date);

      if (date >= now && (date < new Date(closest) || date < closest)) {
        closest = d;
      }
    });

    setNextGame(closest);
  }, [nextGames]);

  var dateFormat = "ll";
  const matchData = [0, 7, 5, 12, 11, 14, 16, 20];
  const goalsData = [0, 4, 6, 12, 10, 15, 17, 20];
  return (
    <ScrollView
      style={AndroidSafeArea.AndroidSafeArea}
      className="flex-1 bg-mainColor"
    >
      <TouchableOpacity
        className="h-7 w-7 bg-secondary rounded-full items-center justify-center m-4"
        onPress={() => navigation.goBack("Home")}
      >
        <ChevronLeftIcon size={17} color="#959595" strokeWidth={3} />
      </TouchableOpacity>

      <Image
        source={clubIcon}
        className="absolute object-contain h-[250] w-[250] items-center top-16 left-16 opacity-20"
      />
      <View className="flex-row">
        <View>
          <View className="flex-row items-center justify-between px-3 py-2">
            <View className="flex-row">
              <Image
                source={clubIcon}
                className="block left-4 z-50 h-6 w-6 opacity-80"
              />
              <Image
                source={countryIcon}
                className="block left-1 h-6 w-6 opacity-90"
              />
            </View>
            <Image
              source={leagueIcon}
              className={
                leagueName === "English Premier league"
                  ? "h-8 w-20 left-24"
                  : "h-12 w-10 left-20"
              }
            />
          </View>
          <View className="px-5">
            <Text className="text-font-gray text-xl"> {playerFName} </Text>
            <Text className="font-bold text-white text-3xl">
              {" "}
              {playerLName}{" "}
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="px-5 py-5">
              <Text className="font-bold text-2xl text-flashOrange">
                {" "}
                {gamesPlayed}{" "}
              </Text>
              <Text className="text-font-secondary text-sm"> Games </Text>
            </View>
            <Chart color="rgb(0,132,255)" dotpoints={matchData} />
          </View>
          <View className="flex-row items-center">
            <View className="px-5 mr-5 py-3">
              <Text className="font-bold text-2xl text-flashOrange">
                {" "}
                {scoreGoals}{" "}
              </Text>
              <Text className="text-font-secondary text-sm"> Goals </Text>
            </View>
            <Chart color="rgb(209,0,24)" dotpoints={goalsData} />
          </View>
          <View className="flex-row items-center space-x-2 px-6 py-2">
            <Image
              source={
                playerLName === "Messi"
                  ? require("../assets/images/ml30.png")
                  : require("../assets/images/cr7.png")
              }
              style={{
                height: 22,
                width: 17,
              }}
            />
            <Text className="font-semibold text-xs text-font-gray">
              {" "}
              {position}{" "}
            </Text>
          </View>
        </View>
        <Image
          source={playerImage}
          className={"absolute right-0"}
          style={
            playerLName === "Ronaldo"
              ? {
                  height: 400,
                  width: 250,
                }
              : {
                  height: 475,
                  width: 250,
                }
          }
        />
      </View>

      <View className="mt-7">
        <LinearGradient
          colors={["#13171A", "#2B3038"]}
          className="h-20 rounded-t-2xl mx-5 opacity-95"
        >
          <View className="flex-row px-4 py-3">
            <Text className="flex-1 font-bold text-flashOrange text-sm">
              {" "}
              Next Game
            </Text>
            <Text
              className="text-font-secondary"
              style={{
                fontSize: 10,
              }}
            >
              {" "}
              {moment(new Date(nextGame.date)).format(dateFormat)}{" "}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 px-5 py-2">
            <Image source={clubIcon} className="h-6 w-6 opacity-80" />
            <Text className="text-font-main text-xs"> v/s </Text>
            <Image source={nextGame.teamIcon} className="h-6 w-6 opacity-80" />
          </View>
        </LinearGradient>

        <View className="h-16 bg-secondary mx-5 rounded-b-2xl">
          <View>
            <View className="flex-row items-center">
              <View className="flex-1 flex-row items-center px-5 pt-2">
                <Text className="font-semibold text-sm text-font-gray">
                  {" "}
                  {clubName}{" "}
                </Text>
                <Text
                  className="text-font-main text-center"
                  style={{
                    fontSize: 8,
                  }}
                >
                  {" "}
                  Home{" "}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 px-3 pt-2">
                <Text
                  className="text-font-secondary"
                  style={{
                    fontSize: 8,
                  }}
                >
                  {" "}
                  Out Avg Rating
                </Text>
                <Text className="font-bold text-font-gray text-xs">
                  {" "}
                  {clubRating.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Text
                className="flex-1 font-semibold text-font-secondary px-6"
                style={{
                  fontSize: 10,
                }}
              >
                {" "}
                {nextGame.teamName}{" "}
              </Text>
              <View className="flex-row items-center space-x-1 px-3 pt-2">
                <Text
                  className="text-font-secondary"
                  style={{
                    fontSize: 8,
                  }}
                >
                  {" "}
                  Out Avg Rating
                </Text>
                <Text className="font-bold text-font-gray text-xs">
                  {" "}
                  {nextGame.avgRating?.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="bg-secondary rounded-t-2xl mx-5 mt-5">
        <Text className="font-semibold text-xs text-flashOrange  p-5">
          {" "}
          Overview{" "}
        </Text>
        <RadarChart/>
      </View>
    </ScrollView>
  );
};

export default PlayerScreen;
