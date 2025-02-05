// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import LocationShareScreen from '../screens/LocationShareScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  ContactsScreen: undefined;
  LocationShareScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} options={{ title: 'Emergency Contacts' }} />
        <Stack.Screen name="LocationShareScreen" component={LocationShareScreen} options={{ title: 'Share Location' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
