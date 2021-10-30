import React, { useState } from "react";
import { StyleSheet, Image, SafeAreaView, TextInput, Text } from "react-native";


const screenA=()=>{
    const[pizzeria, setPizzeria] = useState("");
    return(
        <SafeAreaView>
            <Text 
                style={{
                    marginTop: 100,
                    fontSize: 48,
                    color: "red",
                    textAlign: "center",
                }}
            >
                {pizzeria}
            </Text>
            <TextInput 
                style={styles.textBox} 
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Pizzeria"
                onChangeText={(text)=>setPizzeria(text)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textBox:{
        marginTop: 200,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginRight:20,
        marginLeft: 20,
    },
});

export default screenA;