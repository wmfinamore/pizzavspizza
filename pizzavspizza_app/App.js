import React from 'react';
import { StyleSheet } from 'react-native';
import ListView from "./src/screens/components/list_view";
import DetailView from "./src/screens/components/detail_view";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from "./src/screens/drawer/screenA";
import ScreenB from "./src/screens/drawer/screenB";
import ScreenC from "./src/screens/drawer/screenC";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

renderScreenComponents = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ListView} />
    <Stack.Screen name="Detail" component={DetailView} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={this.renderScreenComponents}></Drawer.Screen>
        <Drawer.Screen name="Screen A" component={ScreenA}></Drawer.Screen>
        <Drawer.Screen name="Screen B" component={ScreenB}></Drawer.Screen>
        <Drawer.Screen name="Screen C" component={ScreenC}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

