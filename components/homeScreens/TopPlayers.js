import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { topPlayers } from "../../dummy";
import { useNavigation } from "@react-navigation/native";

const TopPlayers = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-base text-white px-6 py-3">Top Players</Text>
      <View className="mx-3">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={topPlayers}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push("Player", {
                    ...item,
                  })
                }
              >
                <View className="h-[160] w-[140] bg-secondary mx-2 my-3 rounded-xl">
                  <Image
                    source={item.clubIcon}
                    className="absolute object-contain  h-[116] w-[116] items-center top-5 left-2 opacity-20"
                  />
                  <View className="flex-row">
                    <View>
                      <View className="flex-row items-center pt-2">
                        <Image
                          source={item.clubIcon}
                          className="left-4 z-50 h-3 w-3 opacity-80"
                        />
                        <Image
                          source={item.countryIcon}
                          className="left-2.5 h-3 w-3 opacity-80"
                        />
                      </View>
                      <View className="py-2">
                        <View>
                          <Text className="text-xs text-[#b7b4b4] px-4">
                            {item.playerFName}
                          </Text>
                          <Text className="font-bold text-base text-white px-4">
                            {item.playerLName}
                          </Text>
                        </View>
                        <Image
                          source={item.leagueIcon}
                          className="mx-4 top-9"
                        />
                      </View>
                    </View>
                    <View>
                      <Image
                        source={item.playerImage}
                        className={
                          item.playerLName === "Ronaldo"
                            ? "h-36 w-20 top-4 right-9"
                            : "h-36 w-20 top-4 right-5"
                        }
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default TopPlayers;
