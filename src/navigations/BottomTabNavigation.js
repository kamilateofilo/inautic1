import React from "react";
import { Image, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";

// TODO: export in single file
import Charts from "../screens/auth/charts";
import Home from "../screens/auth/home";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.container,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <View style={styles.menu}>
              <Image
                source={require("../../assets/icons/home.png")}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Home</Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <View style={styles.menu}>
              <Image
                source={require("../../assets/icons/grafico.png")}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Graficos</Text>
            </View>
          ),
        }}
        name="Graficos"
        component={Charts}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
