import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import styles from "./styles";

const Engine = ({ item, info }) => {
  const [engines, setEngines] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= item.qntdMotores; i++) {
      let t = engines;
      t.push(i);
      setEngines(t);
    }
  }, [item.qntdMotores]);

  return (
    <View style={styles.container}>
      {engines.map((engine) => (
        <View style={styles.engine}>
          <View style={styles.engineContent}>
            <Text style={styles.engineTitle}>
              Motor #{engine} - {Math.round(info.motor1FluxoAtual)} KM/L
            </Text>
          </View>
          <View>
            <CircularProgress
              radius={35}
              value={`${
                engine === 1 ? info.motor1RpmAtual : info.motor2RpmAtual
              }`}
              textColor="#008159"
              fontSize={12}
              title={"RPM"}
              inActiveStrokeColor={"#008159"}
              inActiveStrokeOpacity={0.4}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Engine;
