import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
const category = {
    matchDetails: "Match Details",
    timeLine: "Timeline",
    standings: "Standings",
  };

const CategoryBar = ({pressed, setPressed}) => {
  return (
    <View className="flex-row items-center justify-around h-14 bg-mainColor mx-3 mb-5 top-10 px-2 py-2 rounded-xl">
          <Pressable
            onPress={() => {
              setPressed({
                matchDetails: true,
                timeLine: false,
                standings: false,
              });
            }}
          >
            <Text
              className={
                pressed.matchDetails
                  ? "font-bold text-sm text-flashOrange"
                  : "font-bold text-sm text-font-secondary"
              }
            >
              {category.matchDetails}
            </Text>
          </Pressable>
          <View style={styles.vertical}></View>
          <Pressable
            onPress={() => {
              setPressed({
                matchDetails: false,
                timeLine: true,
                standings: false,
              });
            }}
          >
            <Text
              className={
                pressed.timeLine
                  ? "font-bold text-sm text-flashOrange"
                  : "font-bold text-sm text-font-secondary"
              }
            >
              {category.timeLine}
            </Text>
          </Pressable>
          <View style={styles.vertical}></View>
          <Pressable
            onPress={() => {
              setPressed({
                standings: true,
                matchDetails: false,
                timeLine: false,
              });
            }}
          >
            <Text
              className={
                pressed.standings
                  ? "font-bold text-sm text-flashOrange"
                  : "font-bold text-sm text-font-secondary"
              }
            >
              {category.standings}
            </Text>
          </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    vertical: {
      height: 20,
      borderLeftColor: "#2B3038",
      borderLeftWidth: 2.5,
      borderRadius: 5,
    },
  });

export default CategoryBar