import React, {Component} from "react";
import { StyleSheet, SafeAreaView, Text, Button, Image, FlatList } from "react-native";
import client from "./../../api/client";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    try {
        const response = await client.get("/");
        if(!response.ok){
          this.setState({data: response.data});
        }
      }catch(error){
        console.log(error);
    }
  }
  

  render() {
    const {data} = this.state;;
    const mytext = "By ProgramView";
    return (
      <SafeAreaView style={styles.center} >
        <Image
          style={styles.pizzaImage}
          source={{
            url: "http://bit.ly/book-pizza",
          }}
        />
        <Text>results</Text>
        <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
        <Text style={styles.newText}>{mytext}</Text>
        <Text>{data.length} Pizzerias</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <Text style={styles.itemText}>
              {item.pizzeria_name}, {item.city}
            </Text>
          )}
        />
        <Button
          title="list Item, Click for Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </SafeAreaView>
    )
  }
}

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
