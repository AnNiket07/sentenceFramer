import React, {useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Displayscreen from './pages/DisplayScreen';
import Homescreen from './pages/HomeScreen';
import Breakfast from './pages/Breakfast';
import Sports from './pages/Sports';
import Movies from './pages/Movies';
import Lunch from './pages/Lunch';
import Places from './pages/Places';
import Entertainment from './pages/Entertainment';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Display" component={Displayscreen} />
        <Stack.Screen name="Breakfast" component={Breakfast} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Lunch/Dinner" component={Lunch} />
        <Stack.Screen name="Places" component={Places} />
        <Stack.Screen name="Entertainment" component={Entertainment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
