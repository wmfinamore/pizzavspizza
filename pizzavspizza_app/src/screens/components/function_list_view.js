import React, {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, Text, Image, FlatList, TouchableOpacity } from "react-native";
import client from "../../api/client";

const ListView=({navigation})=>{
    const[data, setData]=useState([]);

    const getList=async ()=>{
        const response=await client.get("/");
        setData(response.data);
    };

    useEffect(()=>{
        getList();
    }, []);
    const mytext = "by ProgramWithUs";
    return(
        <SafeAreaView style={styles.center} >
        <Image
          style={styles.pizzaImage}
          source={{
            url: "http://bit.ly/book-pizza",
          }}
        />
        <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
        <Text style={styles.newText}>{mytext}</Text>
        <Text>{data.length} Pizzerias</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
              return (
                  <TouchableOpacity
                    onPress={()=>{
                      navigation.navigate("Detail",{objurl:item.absolute_url,hey:"Best Pizza"});
                    }}
                    >
                      <Text style={styles.itemText}>
                          {item.pizzeria_name}, {item.city}
                      </Text>
                    </TouchableOpacity>
              );
          }}
        />
        
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
          fontSize: 36,
          marginBottom: 16,
      },
      baseText:{
        color:"navy",
        fontSize:30,
        fontStyle:"italic",
      },
      newText:{
        color:"red",
      },
      pizzaImage: {
        width: 200,
        height: 200,
      },
      itemText:{
        color:"green",
        fontSize:20,
      }
})

export default ListView;




