/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home'
import MapScreen from './src/screens/Map'
import SettingScreen from './src/screens/Settings'


const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const HomeGroup = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'center'}}/>
  </HomeStack.Navigator>
)

const MapGroup = () => (
  <MapStack.Navigator>
    <MapStack.Screen name="Map" component={MapScreen} options={{headerTitleAlign: 'center'}}/>
  </MapStack.Navigator>
)

const SettingsGroup = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={SettingScreen} options={{headerTitleAlign: 'center'}}/>
  </SettingsStack.Navigator>
)

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeGroup}
      options={{
        // tabBarLabel: 'Main',
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="home" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapGroup}
      options={{
        tabBarLabel: 'Map', justifyContent: 1,
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="navigate-circle-outline" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen 
      name="Settings" 
      component={SettingsGroup}
      options={{
        tabBarLabel: "Settings", justifyContent: 1,
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="settings-outline" size={size} color={color} />;
        },
      }} />
  </Tab.Navigator>
)






function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={BottomTab} />
        {/* <RootStack.Screen name="Settings" component={SettingsScreen}/> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;