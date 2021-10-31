import React from "react";
import { StyleSheet, Image, SafeAreaView, TextInput, Button, Text } from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";


const screenA=()=>{
    return(
        <SafeAreaView>
            <Formik 
                initialValues={{pizzeria:"", city:""}}
                onSubmit={()=>{
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({handleChange, handleSubmit, values})=>(
                    <>
                        <TextInput
                            style={styles.textBox}
                            value={values.pizzeria}
                            type="text"
                            placeholder="Enter a new pizza place here"
                            onChangeText={handleChange("pizzeria")}
                        />
                        <TextInput
                            style={styles.textBox}
                            value={values.city}
                            placeholder="City"
                            onChangeText={handleChange("city")}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </>
                )}
            </Formik>
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