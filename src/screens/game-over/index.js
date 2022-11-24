import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import colors from "../../constants/colors";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { Card } from "../../components";

const GameOver = ({rounds, selectedNumber, onRestart }) => {
    

    return (
        <View style={styles.container}>
            <Card style={styles.content}>
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