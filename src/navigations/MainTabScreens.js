import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { HomeScreen, ProfileScreen, SettingsScreen } from '../screens/OtherScreens';
import InsertionStackScreens from './InsertionStackScreens';
import QueryStackScreens from './QueryStackScreens';
import { InsertProcedure } from '../screens/InsertionStack';
import { theme } from '../core/theme';
import { language } from '../core/languages';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreens = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: language.home,
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Insert"
        component={InsertionStackScreens}
        options={{
          tabBarLabel: language.insert,
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DEBUG"
        component={QueryStackScreens}
        options={{
          tabBarLabel: language.query,
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: language.profile,
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default React.memo(MainTabScreens);