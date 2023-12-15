import React from "react";
import COLORS from "../../../../constants/theme";
import styles from "./styles";

const Input = ({ secureTextEntry, value, onChange, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.black}
      style={styles.container}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default Input;
