import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import colors from "../../constants/colors";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { Card } from "../../components";
// import { Card } from "../../components";

const GameOver = ({rounds, selectedNumber, onRestart }) => {
    // const [isPortrait, setIsPortrait] = useState(true);
    
    // const onPortrait = () => {
    //     const dim = Dimensions.get('screen');
    //     return dim.height >= dim.width;
    // }

    // const statePortrait = () => {
    //     setIsPortrait(onPortrait());
    // }

    // useEffect(() => {
    //     Dimensions.addEventListener('change', statePortrait);
    //     return () => {
    //         Dimensions.removeEventListener('change', statePortrait);
    //     } 
    // },[])

    return (
        <View style={styles.container}>
            <Card style={styles.content}>
            {/* <Card style={ isPortrait ? styles.content : styles.contentLandscape}> */}
                <Image 
                style={styles.image} 
                source={{ uri: 'https://i.postimg.cc/FzVxDGXm/gameOver.jpg' }} 
                />
                <Text style={styles.textContent}>Rounds: {rounds}</Text>
                <Text style={styles.textContent}>Selected Number: {selectedNumber}</Text>
                <Button
                    title="Restart"
                    onPress={onRestart}
                    color= {colors.gameOnPrimary}
                />
            </Card>
        </View>
    )
}

export default GameOver;