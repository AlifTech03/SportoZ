import { View, Text } from "react-native";
import React from "react";
import { LineChart, } from "react-native-chart-kit";

const Chart = ({ color, dotpoints }) => {
  return (
    <LineChart
      className= 'right-20 mb-10'
      data={{
        datasets: [
          {
            data: dotpoints,
          },
        ],
      }}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,

        color: (opacity = 0.5) => `(${color} ${opacity})`,
        strokeWidth: 1,
        fillShadowGradientFrom: "#FFFFFF",
        fillShadowGradientTo: "#13171A",
        fillShadowGradientFromOpacity: .4,
        fillShadowGradientToOpacity: 0.2,
      }}
      fromZero={true}
      width={195} // from react-native
      height={55} // optional, defaults to 1
      withDots={false}
      withHorizontalLabels={false}
      withHorizontalLines={false}
      withVerticalLines={false}
    />
  );
};

export default Chart;
