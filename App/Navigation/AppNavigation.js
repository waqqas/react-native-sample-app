import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import TabBar from '../Containers/TabBar';
import HomeScreen from '../Containers/HomeScreen';
import SettingsScreen from '../Containers/SettingsScreen';

const MainApp = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      params: {
        label: 'Home',
      },
    },
    Settings: {
      screen: SettingsScreen,
      params: {
        label: 'Settings',
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: ({ navigation }) => <TabBar navigation={navigation}/>,
    lazy: true,
    headerMode: 'none',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

const AppNavigator = createAppContainer(MainApp);

export default AppNavigator;
