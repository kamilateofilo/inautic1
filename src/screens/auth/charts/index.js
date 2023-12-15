import React from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import styles from "./styles";

const Charts = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      <ImageBackground
        source={require("./../../../../assets/images/capa.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Gráficos</Text>
          </View>
          <View style={styles.chartContainer}>
            <View>
              <Text style={styles.chartTitle}>Motores</Text>
              <BarChart
                data={enginer}
                width={Dimensions.get("window").width - 40}
                height={200}
                yAxisLabel=""
                chartConfig={{
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                }}
                style={styles.chart}
              />
            </View>

            <View>
              <Text style={styles.chartTitle}>Tanques</Text>
              <BarChart
                data={data}
                width={Dimensions.get("window").width - 40}
                height={200}
                yAxisLabel=""
                chartConfig={{
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                }}
                style={styles.chart}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Charts;
