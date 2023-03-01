import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  VictoryChart,
  VictoryArea,
  VictoryPolarAxis,
  VictoryGroup,
} from "victory-native";

const characterData = [
  { Left: 3560, Forward: 4910, Right: 4910, Backward: 2360 },
];
const chartTheme = {
  axis: {
    style: {
      
      tickLabels: {
        // this changed the color of my numbers to white
        fill: 'white',
            
      },
    },
  },
};

const { width, height } = Dimensions.get("screen");
class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(characterData),
      maxima: this.getMaxima(characterData),
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: maxByGroup[key] / 100 };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }
  render() {
    return (
      <View className="items-center">
        <VictoryChart polar theme={chartTheme}>
          <VictoryGroup
            color={"#FF7401"}
            style={{ data: { fillOpacity: 0.3, strokeWidth: 2 } }}
          >
            {this.state.data.map((data, i) => {
              return (
                <VictoryArea
                  animate
                  key={i}
                  data={data}
                  width={width}
                  height={height}
                  labelPlacement="vertical"
                  style={{
                    axis: { stroke: "transparent" },
                    grid: { stroke: "transparent", opacity: 0.5 },
                  }}
                  
                />
              );
            })}
          </VictoryGroup>
          
              <VictoryPolarAxis
                labelPlacement="vertical"
                
                style={{
                  axis: { stroke: "transparent" },
                  grid: { stroke: "transparent", opacity: 0.5 },
                }}
                
              />
            
          
        </VictoryChart>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default RadarChart;
