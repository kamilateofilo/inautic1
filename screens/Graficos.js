import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { dummyData } from "../const";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Graficos = () => {
  const enginer = {
    labels: ["Motor 1", "Motor 2"],
    datasets: [
      {
        data: [0, 0],
      },
    ],
  };

  const data = {
    labels: ["Tanque 1", "Tanque 2", "Tanque 3"],
    datasets: [
      {
        data: [0, 0, 0],
      },
    ],
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      <ImageBackground
        source={require("./../assets/images/capa.png")}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 20,
            marginTop: Platform.OS === "android" ? hp("7%") : hp("8%"),
          }}
        >
          <View style={{ marginBottom: 8 }}>
            <Text
              style={{
                fontFamily: "bold",
                fontSize: 18,
                color: "#fff",
              }}
            >
              Gráficos
            </Text>
          </View>
          <View
            style={{
              flex: 4,
            }}
          >
            <View>
              <Text style={{ fontSize: 20, color: "#fff" }}>Motores</Text>
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
                style={{
                  marginVertical: 8,
                  borderRadius: 8,
                }}
              />
            </View>

            <View>
              <Text style={{ fontSize: 20, color: "#fff" }}>Tanques</Text>
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
                style={{
                  marginVertical: 8,
                  borderRadius: 8,
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Graficos;
