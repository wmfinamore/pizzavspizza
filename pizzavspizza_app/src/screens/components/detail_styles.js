import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Cochin",
        margin: 10,
        fontSize: 40,
        marginBottom: 5,
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
    },
    details: {
        margin: 10,
        marginBottom: 5,
        color: "black",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    pizzaImage: {
        borderRadius: 20,
        width: 400,
        height: 400,
    }
})

export default styles;