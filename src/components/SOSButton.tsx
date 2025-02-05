import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const SOSButton: React.FC = () => {
  const handleSOSPress = () => {
    Alert.alert("SOS", "Alert sent to emergency contacts!");
    // Add logic for sending an alert here.
  };

  return (
    <TouchableOpacity style={styles.sosButton} onPress={handleSOSPress}>
      <Text style={styles.buttonText}>SOS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sosButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SOSButton;
