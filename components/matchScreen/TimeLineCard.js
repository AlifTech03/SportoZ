import { View, Text, Image } from "react-native";
import React from "react";

const TimeLineCard = ({
  index,
  length,
  type,
  typeImage,
  playerName,
  playerImage,
  assistName,
  clubName,
  clubIcon,
  clubColor,
  time,
}) => {
  const min = "\u2032";
  return (
    <>
      <View className="flex-row mx-4 my-4">
        <View className="flex-1 space-y-1">
          <View className="flex-row items-center space-x-1">
            <Image source={typeImage} />
            <Text className="text-sm text-font-secondary"> {type} </Text>
          </View>
          <Text className="font-semibold text-base text-white">
            {" "}
            {playerName}{" "}
          </Text>
          <View>
            <View className="flex-row items-center space-x-1">
              <Image source={clubIcon} className="h-4 w-4" />
              <Text
                className="text-white"
                style={{
                  fontSize: 10,
                }}
              >
                {clubName}
              </Text>
            </View>
            {type === "Goal!!!" ? (
              <Text
                className="text-font-secondary px-5"
                style={{
                  fontSize: 10,
                }}
              >
                Assist: {assistName}
              </Text>
            ) : null}
          </View>
        </View>
        <View className="items-center space-y-1">
          <Text className="text-xs text-font-secondary">
            {" "}
            {time} {min}{" "}
          </Text>
          <Image
            source={playerImage}
            className={`h-10 w-10 rounded-full`}
            style={{
              backgroundColor: `${clubColor}`,
            }}
          />
        </View>
      </View>
      {index === length - 1 ? null : (
        <View className=" border-b-border-color border-b-2 mx-4" />
      )}
    </>
  );
};

export default TimeLineCard;
