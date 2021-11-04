import React from "react";
import { SafeAreaView, TextInput, Button, Text } from "react-native";
import {ErrorMessage, Formik} from "formik";
import styles from "./addPizzeria_styles";
import validationSchema from "./addPizzeria_valid";


const addPizzeria=()=>{
    
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


export default addPizzeria;