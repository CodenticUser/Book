// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from '../screens/auth/Home';
import Start from '../screens/auth/Start';
import Welcome from '../screens/auth/Welcome';
import Menu from '../screens/home/Menu';
import Categories from '../screens/home/Categories';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
}

export default App;
