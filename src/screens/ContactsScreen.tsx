import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmergencyContacts from '../components/EmergencyContacts';

const ContactsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Emergency Contacts</Text>
      <EmergencyContacts />
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

export default ContactsScreen;
