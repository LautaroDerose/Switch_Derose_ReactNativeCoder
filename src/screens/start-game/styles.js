import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
    },
    container: {
        flex:1,
        alignItems: "center",
        marginVertical: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.gameOnTeriary,
        paddingVertical: 10,
    },
    inputContainer: {
        width: '80%',
        // width: 350,
        justifyContent: "center",
        alignItems: "center",
        // marginHorizontal: 20,
        marginVertical:20,
    },
    label: {
        fontSize: 12,
        paddingVertical: 5,
        textAlign: "center",
        color: colors.gameTeriary,
    },
    input: {
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width:200,
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer: {
        width: '90%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    confirmedTitle: {
        fontSize: 16,
    },
    confirmedNumber: {
        fontSize: 22,
        fontWeight: 'bold',
    },

})