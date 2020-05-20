// In App.js in a new project

import * as React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  StartScreen,
  WelcomeScreen,
  DiscoverScreen,
  LibraryScreen,
  WishlistScreen,
  StoreScreen,
  ProfileScreen,
} from '@screens';
import {Images, Colors} from '@theme';

const Stack = createStackNavigator();
function Auth() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.activeTintColor,
      }}>
      <Tab.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.tabprofile}
              style={{
                width: 20,
                height: 22,
                tintColor: focused
                  ? Colors.activeTintColor
                  : Colors.diactiveTintColor,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.tablibrary}
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeTintColor
                  : Colors.diactiveTintColor,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.tabwishlist}
              style={{
                width: 22,
                height: 20,
                tintColor: focused
                  ? Colors.activeTintColor
                  : Colors.diactiveTintColor,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.tabstore}
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeTintColor
                  : Colors.diactiveTintColor,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.tabdiscover}
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeTintColor
                  : Colors.diactiveTintColor,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigation() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
