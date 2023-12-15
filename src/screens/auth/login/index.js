import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

import styles from "./styles";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  // TODO: isolate in file with context
  const handleLogin = async () => {
    await axios
      .post("https://nodered.brenopereira.com.br/api/autentica", {
        usuario,
        senha,
      })
      .then(async (res) => {
        if (res.data.length) {
          try {
            const user = JSON.stringify(res.data[0]);
            await AsyncStorage.setItem("@inautic/user", user);
            navigation.navigate("Home");
          } catch (e) {
            console.log("Erro ao salvar usuário");
          }
        } else {
          Alert("Alerta", "Usuário não encontrado.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../../../../assets/images/capa.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentAction}>
            <Text style={styles.text}>Entrar com sua conta</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.form}>
              <Text style={styles.label}>Usuário</Text>
              <View style={styles.formGroup}>
                <TextInput
                  placeholder="Digite o nome do seu usuário"
                  placeholderTextColor={COLORS.black}
                  keyboardType="email-address"
                  style={styles.input}
                  value={usuario}
                  onChangeText={setUsuario}
                />
              </View>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Senha</Text>
              <View style={styles.formGroupPassword}>
                <TextInput
                  placeholder="Digite a sua senha"
                  placeholderTextColor={COLORS.black}
                  style={styles.input}
                  secureTextEntry={isPasswordShown}
                  value={senha}
                  onChangeText={setSenha}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.white} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.white} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => handleLogin()}
              style={styles.action}
            >
              <Text style={styles.actionText}>Logar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;
