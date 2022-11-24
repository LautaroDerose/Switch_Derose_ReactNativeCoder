import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: width * 0.8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentLandscape: {
        width: width * 0.8,
        paddingVertical: 20,
        flexDirection: 'row',
        // justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    textContent: {
        fontSize:16,
        textAlign: 'center',
        paddingVertical: 1,
        fontFamily: 'Lato-Regular',
    }
});