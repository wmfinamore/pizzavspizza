import { StyleSheet } from "react-native";
import validationSchema from "./addPizzeria_valid";

const styles = StyleSheet.create({
    textBox:{
        marginTop: 200,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginRight:20,
        marginLeft: 20,
    },
    image:{
        width: 200,
        height: 200,
    },
    error:{
        color:'red',
    },
    textBox:{
        borderColor: "#CCCCCC",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight:20,
    },
    addButton:{
        borderWidth: 1,
        borderColor: "#007BFF",
        backgroundColor: "#007BFF",
        padding: 15,
    },
    container:{
        justifyContent: "center",
        backgroundColor: "$ffffff",
        width: "100%",
        height: "100%",
    },
});

export default styles;