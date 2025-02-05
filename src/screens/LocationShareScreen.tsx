import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationShareScreen: React.FC = () => {
  const handleLocationShare = () => {
    Geolocation.getCurrentPosition(
      position => {
        Alert.alert(
          "Location Shared",
          `Your location: ${position.coords.latitude}, ${position.coords.longitude}`
        );
        // Logic to share location goes here.
      },
      error => {
        Alert.alert("Location Error", "Unable to fetch location. Please enable location services.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Your Location</Text>
      <Button title="Share Location" onPress={handleLocationShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default LocationShareScreen;
