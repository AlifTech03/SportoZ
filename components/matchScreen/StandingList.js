import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Standing } from "../../dummy";

// teamName
// teamShortName
// teamLogo
// matchPlayed
// matchWin
// matchDraw
// matchLost
// points

const StandingList = ({ team1, team2 }) => {
  const [rank, setRank] = useState([]);

  const Indicate = () => {
    return (
      <View className="absolute h-1.5 w-1.5 right-6 top-2 rounded-full bg-flashOrange" />
    );
  };

  useEffect(() => {
    Standing.sort((first, second) => second.points - first.points);
    setRank(Standing);
  }, [Standing]);
  return (
    <>
      {rank.map((item, index) => {
        const styling =
          item.teamName === team1 || item.teamName === team2
            ? "text-sm text-font-gray"
            : "text-sm text-font-secondary";
        return (
          <View key={item.teamName} className="my-2">
            <View className=" flex-row ml-7 mr-5 my-2">
              <View className="flex-1 flex-row space-x-8">
                <View className="">
                  {item.teamName === team1 || item.teamName === team2 ? (
                    <Indicate />
                  ) : null}
                  <Text
                    className={
                      item.teamName === team1 || item.teamName === team2
                        ? "text-sm text-font-gray"
                        : "text-sm text-font-secondary"
                    }
                  >
                    {" "}
                    {index + 1}
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1 px-2">
                  <Image source={item.teamLogo} />
                  <Text className={styling}> {item.teamShortName} </Text>
                </View>
              </View>
              <View className="flex-1 flex-row space-x-5 mr-11">
                <Text className={styling}> {item.matchPlayed} </Text>
                <Text className={styling}> {item.matchWin} </Text>
                <Text className={styling}> {item.matchDraw} </Text>
                <Text className={styling}> {item.matchLost} </Text>
                <Text className={styling}> {item.points} </Text>
              </View>
            </View>
            {index === rank.length - 1 ? null : (
              <View className=" border-b-border-color border-b-2 h-3 mx-7" />
            )}
          </View>
        );
      })}
    </>
  );
};

export default StandingList;

const styles = StyleSheet.create({});
