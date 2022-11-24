import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import colors from "../../constants/colors";

const Card = ({children, style}) => {
    return (
        <View style={{ ...styles.container, style }}>
            {children}
        </View>
    )
}
export default Card;