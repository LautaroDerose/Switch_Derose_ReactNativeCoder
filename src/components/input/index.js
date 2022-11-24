import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import colors from "../../constants/colors";

const Input = ({ style, ...props }) => {
    return (
        <TextInput {...props} style={{...styles.container, ...style}} />
    )
}
export default Input;