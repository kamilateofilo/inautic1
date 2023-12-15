import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  ImageBackground,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Vessel from "./../../../components/organisms/vessel";

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation, progress }) => {
  const [user, setUser] = useState({
    nome: "",
    clienteID: "",
  });

  const [vessels, setVessels] = useState([]);

  const getUser = async () => {
    const data = await AsyncStorage.getItem("@inautic/user");

    setUser(JSON.parse(data));
  };

  const getVessel = async () => {
    await axios
      .post("https://nodered.brenopereira.com.br/api/embarcacoes", {
        clienteID: user.clienteID,
      })
      .then(async (res) => {
        setVessels(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getVessel();
    }, 10000);
  }, [user]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../../assets/images/capa.png")}
      >
        <StatusBar barStyle="light-content" />

        <View
          style={{
            flexDirection: "column",
            marginTop: Platform.OS === "android" ? hp("5%") : hp("8%"),
            paddingHorizontal: "5%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{ fontFamily: "regular", fontSize: 16, color: "#fff" }}
              >
                Bem-vindo(a)
              </Text>
              <Text
                style={{
                  fontFamily: "RoboltoMedium",
                  color: "#fff",
                  fontSize: 22,
                }}
              >
                {user.nome}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              alignContent: "center",
              alignItems: "center",
              width: 250,
              height: 70,
            }}
            source={require("../../../../assets/images/logo.png")}
          />
        </View>

        <View
          style={{
            marginTop: 8,
            paddingHorizontal: 10,
            flex: 1,
            paddingBottom: 100,
          }}
        >
          <FlatList
            keyExtractor={(item) => item.id}
            data={vessels}
            renderItem={({ item }) => <Vessel item={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
