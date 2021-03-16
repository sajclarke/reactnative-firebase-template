/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

import * as React from 'react';
import {View} from 'react-native';
import {
  Provider as PaperProvider,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Text,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TodoScreen from './src/screens/Todos';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// function TodoScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Todos</Text>
//     </View>
//   )
// }

function MapScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Map</Text>
    </View>
  );
}

function SettingsScreen() {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 24}}>Settings!</Text>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeTabNav = createMaterialTopTabNavigator();

const HomeTabs = () => (
  <HomeTabNav.Navigator>
    <HomeTabNav.Screen name="Home" component={HomeScreen} />
    <HomeTabNav.Screen name="Map" component={MapScreen} />
  </HomeTabNav.Navigator>
);

const HomeGroup = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen name="Home" component={HomeTabs} />
    <HomeStack.Screen name="Details" component={DetailsScreen} />
  </HomeStack.Navigator>
);

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeGroup}
      options={{
        // tabBarLabel: 'Main',
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="home" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Todos"
      component={TodoScreen}
      options={{
        tabBarLabel: 'Tasks',
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons
              name="checkmark-circle-outline"
              size={size}
              color={color}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        // tabBarLabel: 'Main',
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="settings-outline" size={size} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={BottomTab} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
