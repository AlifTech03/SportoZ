import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import StateBar from "./StateBar";

const MatchDetails = ({ matchDetails }) => {
  return (
    <ScrollView className="mt-12" showsVerticalScrollIndicator={false}>
      {matchDetails.map((item) => (
        <StateBar
          key={item.title}
          type={item.type}
          title={item.title}
          homeScore={item.home}
          awayScore={item.away}
        />
      ))}
    </ScrollView>
  );
};

export default MatchDetails;

const styles = StyleSheet.create({});
