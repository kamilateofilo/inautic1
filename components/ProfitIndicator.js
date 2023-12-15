import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dummyData } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfitIndicator = ({ percentage_change, type }) => {
  return (
    <View
      style={{
        transform: [{ rotate: "90deg" }],
        flexDirection: "row",
        height: 30,
        width: 40,
        borderRadius: 12,
        marginLeft: 22,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: type == "I" ? "#13D131" : "red",
      }}
    >
      <Text style={{ fontFamily: "regular", color: "#fff", fontSize: 10 }}>
        {percentage_change}
      </Text>
    </View>
  );
};

export default ProfitIndicator;
