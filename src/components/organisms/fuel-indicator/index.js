import React from "react";
import { View, Text } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";
import styles from "./styles";

const FuelIndicator = ({ item, info }) => {
  const porcentIndicator =
    (info.tanque1VolumeAtual / info.tanque1VolumeMax) * 100;
  const porcentIndicator2 =
    (info.tanque2VolumeAtual / info.tanque2VolumeMax) * 100;
  const porcentIndicator3 =
    (info.tanque3VolumeAtual / info.tanque3VolumeMax) * 100;

  const tankWidth = 40;
  const tankHeight = 100;
  const temperatureBarWidth = 40;
  const borderWidth = 1;
  const containerWidth = tankWidth + temperatureBarWidth + 40;

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3 }}>
        <Svg height={tankHeight + 20} width={containerWidth}>
          {/* Tanque de combustível */}
          <Rect
            x={0}
            y={5}
            width={tankWidth}
            height={tankHeight + 5}
            fill="#fff"
            strokeWidth={borderWidth}
            stroke="#8f8f8f"
            rx="4"
          />

          {/* Barra de combustível */}
          <Rect
            x={5}
            y={5 + (1 - porcentIndicator / 100) * tankHeight}
            width={tankWidth - 10}
            height={Math.round(porcentIndicator)}
            fill="#28AFB0"
            strokeWidth={borderWidth}
            rx="4"
          />

          <SvgText x={50} y={30} textAnchor="start" fontSize="15" fill="#000">
            {`${info.tanque1TemperaturaAtual}°C`}
          </SvgText>

          <SvgText x={50} y={65} textAnchor="start" fontSize="15" fill="#000">
            {`${Math.round(info.tanque1VolumeAtual)}L`}
          </SvgText>

          <SvgText x={50} y={100} textAnchor="start" fontSize="15" fill="#000">
            {`${Math.round(info.tanque1DensidadeAtual)}G/L`}
          </SvgText>
        </Svg>
        <Text>Tanque 1</Text>
      </View>
      <View style={{ flex: 0.3 }}>
        <Svg height={tankHeight + 20} width={containerWidth}>
          {/* Tanque de combustível */}
          <Rect
            x={10}
            y={5}
            width={tankWidth}
            height={tankHeight + 10}
            fill="#fff"
            strokeWidth={borderWidth}
            stroke="#8f8f8f"
            rx="4"
          />

          {/* Barra de combustível */}
          <Rect
            x={15}
            y={10 + (1 - porcentIndicator2 / 100) * tankHeight}
            width={tankWidth - 10}
            height={Math.round(porcentIndicator2)}
            fill="#28AFB0"
            strokeWidth={borderWidth}
            rx="4"
          />

          {/* Texto de temperatura */}
          <SvgText x={60} y={30} textAnchor="start" fontSize="15" fill="#000">
            {`${info.tanque2TemperaturaAtual}°C`}
          </SvgText>

          <SvgText x={60} y={65} textAnchor="start" fontSize="15" fill="#000">
            {`${Math.round(info.tanque2VolumeAtual)}L`}
          </SvgText>

          <SvgText x={60} y={100} textAnchor="start" fontSize="15" fill="#000">
            {`${Math.round(info.tanque2DensidadeAtual)}G/L`}
          </SvgText>
        </Svg>
        <Text>Tanque 2</Text>
      </View>
      <View style={{ flex: 0.3 }}>
        <Svg height={tankHeight + 20} width={containerWidth}>
          {/* Tanque de combustível */}
          <Rect
            x={10}
            y={5}
            width={tankWidth}
            height={tankHeight + 10}
            fill="#fff"
            strokeWidth={borderWidth}
            stroke="#8f8f8f"
            rx="4"
          />

          {/* Barra de combustível */}
          <Rect
            x={15}
            y={10 + (1 - porcentIndicator3 / 100) * tankHeight}
            width={tankWidth - 10}
            height={Math.round(porcentIndicator3)}
            fill="#28AFB0"
            strokeWidth={borderWidth}
            rx="4"
          />

          {/* Texto de temperatura */}
          <SvgText x={60} y={30} textAnchor="start" fontSize="14" fill="#000">
            {`${info.tanque3TemperaturaAtual}°C`}
          </SvgText>

          <SvgText x={60} y={65} textAnchor="start" fontSize="14" fill="#000">
            {`${Math.round(info.tanque3VolumeAtual)}L`}
          </SvgText>

          <SvgText x={60} y={100} textAnchor="start" fontSize="14" fill="#000">
            {`${Math.round(info.tanque3DensidadeAtual)}G/L`}
          </SvgText>
        </Svg>
        <Text>Tanque 3</Text>
      </View>
    </View>
  );
};

export default FuelIndicator;
