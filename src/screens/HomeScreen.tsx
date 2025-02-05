// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SOSButton from '../components/SOSButton';
import MapViewComponent from '../components/MapViewComponent';
import SafetyTips from '../components/SafetyTips';
import { HomeScreenNavigationProp } from '../navigation/types'; // Adjust the path as necessary

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sakhi</Text>
      <SOSButton />
      <Button title="Manage Contacts" onPress={() => navigation.navigate('ContactsScreen')} />
      <MapViewComponent />
      <SafetyTips />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default HomeScreen;
