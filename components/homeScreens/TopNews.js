import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const news = {
  newsTitle:
    "EPL 2021-22: Manchester City beat Everton 3-0 move to second in the table",
  newsImage: require("../../assets/images/news.png"),
  newsDescription:
    "Defending champions Manchester City defeated Everton 3-0 in a one-sided match in the English Premier League on Sunday as they returned to the second spot behind leaders Chelsea.\nPep Guardiola's side rode on goals by Raheem Sterling (44'), Rodrigo Hernandez Rodri (55') and Bernardo Silva (86') as they won their eighth match out of 12; moving up to 26 points.They are now three points behind Chelsea in the race for the top spot.Liverpool are third at 25 points.\nIt was another masterful performance from the defending champions, who replicated the dominant display against Manchester United a fortnight ago to claim a deserved victory.\n Sterling gave the Citizens the lead at the Etihad Stadium when he converted Joao Cancelo's superb cross to mark his 300th Premier League appearance with a goal. Rodrigo then scored a goal that looks like a contender for the goal of the season, the Spaniard beat Jordan Pickford with a 25-yard thunderbolt to double City's lead.\nBernardo Silva wrapped up the three points late on when he reacted quickest to slide Cole Palmer's deflected strike-through Pickford's legs from six yards.\n It was another masterful performance from the defending champions, who replicated the dominant display against Manchester United a fortnight ago to claim a deserved victory.",

  publishedAt: "5 minutes ago",
};

const TopNews = () => {
  const navigation= useNavigation();
  return (
    <View className='mb-4'>
      <Text className="text-base text-white px-6 py-3">News</Text>
      <View className="h-[160] w-[360] bg-secondary mx-5 rounded-2xl">
        <Image
          source={news.newsImage}
          className="object-cover w-[360] h-[100] rounded-t-2xl"
        />
        <View className="flex-row items-center">
          <Text className="w-[300] text-xs text-white px-3 py-2 leading-5">
            {news.newsTitle}
          </Text>
          <TouchableOpacity className="flex-1 ml-7 mb-2" onPress={() => navigation.push( "News", {
           title: news.newsTitle,
           image: news.newsImage,
           description: news.newsDescription,
           published: news.publishedAt
          }) }>
            <ChevronRightIcon
              size={15}
              className="bg-flashOrange"
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopNews;
