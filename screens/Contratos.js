import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Image,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Contratos = ({ value, max }) => {
  const angle = (value / max) * 180; // Calcula o ângulo com base no valor e no máximo

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar
        barstyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      <LinearGradient
        start={{ x: 0.0, y: 0.4 }}
        end={{ x: 0.5, y: 1.0 }}
        location={[0, 1]}
        colors={["#2249D6", "#2D97DA"]}
        style={{ flex: 1 }}
      >
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 65 }}>
            <Avatar.Image
              source={require("../assets/images/resgate.png")}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                Test Inautic
              </Title>
              <Caption style={styles.caption}>@test</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#FFF" size={20} />
            <Text style={{ color: "#FFF", marginLeft: 20 }}>
              Manaus, Brasil
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#FFF" size={20} />
            <Text style={{ color: "#FFF", marginLeft: 20 }}>+92-900000009</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#FFF" size={20} />
            <Text style={{ color: "#FFF", marginLeft: 20 }}>
              test@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            fontSize: 50,
          }}
        ></View>

        <View style={{ alignItems: "center" }}>
          {/* Indicador de progresso (linha) */}
          <View
            style={{
              width: 2,
              height: 100,
              backgroundColor: "red", // Cor do indicador
              transform: [{ rotate: `${angle}deg` }],
              position: "absolute",
              top: 50,
            }}
          />

          {/* Medidor de fundo (círculo branco) */}
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              backgroundColor: "#FFF", // Cor de fundo
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Valor exibido no centro do medidor */}
            <Text style={{ fontSize: 20 }}>{value}k/m</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Contratos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e76b6",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
