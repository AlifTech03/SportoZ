import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeLineCard from './TimeLineCard'

const Timeline = ({timeLine}) => {
  return (
    <ScrollView className='flex-1 mt-10'>
      {timeLine.map((item, index) => 
        ( 
          <TimeLineCard
          key={item.playerName}
          length={timeLine.length}
          index={index}
          type={item.type}
          typeImage={item.typeImage}
          playerName={item.playerName}
          playerImage={item.playerImage}
          assistName={item.assistName}
          clubName={item.teamName}
          clubIcon={item.teamIcon}
          clubColor={item.teamColor}
          time={item.time}
          />
        )
      )}
    </ScrollView>
  )
}

export default Timeline

const styles = StyleSheet.create({})