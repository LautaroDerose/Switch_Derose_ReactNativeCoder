import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gamePrimaryContainer,
        height: height *0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
 
    }
})