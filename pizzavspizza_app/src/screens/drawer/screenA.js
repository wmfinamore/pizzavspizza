import React from "react";
import { StyleSheet, Image, SafeAreaView, TextInput, Button, Text } from "react-native";
import {ErrorMessage, Formik} from "formik";
import * as Yup from "yup";


const screenA=()=>{
    const validationSchema = Yup.object({
        pizzeria: Yup.string().max(200, 'Must be less than 200 characters').min(3, 'Must be at least 3 characters').required('Required'),
        city: Yup.string().max(400, 'Must be less than 400 characters').min(3, 'Must be at least 3 characters'),
    })
    return(
        <SafeAreaView>
            <Formik 
                initialValues={{pizzeria:"", city:""}}
                onSubmit={()=>{
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, values, errors})=>(
                    <>
                        <TextInput
                            style={styles.textBox}
                            value={values.pizzeria}
                            type="text"
                            placeholder="Enter a new pizza place here"
                            onChangeText={handleChange("pizzeria")}
                        />
                        <Text style={styles.error}>{errors.pizzeria}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.city}
                            placeholder="City"
                            onChangeText={handleChange("city")}
                        />
                        <Text style={styles.error}>{errors.city}</Text>
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
    error:{
        color:'red',
    }
});

export default screenA;