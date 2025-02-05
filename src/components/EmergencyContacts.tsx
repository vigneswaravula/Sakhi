import React, { useState } from 'react';
import { View, Text, FlatList, Button, Alert, TextInput, StyleSheet } from 'react-native';

interface Contact {
  id: string;
  name: string;
  phone: string;
}

const EmergencyContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');

  const addContact = () => {
    if (newContactName && newContactPhone) {
      const newContact: Contact = {
        id: Date.now().toString(),
        name: newContactName,
        phone: newContactPhone,
      };
      setContacts([...contacts, newContact]);
      setNewContactName('');
      setNewContactPhone('');
    } else {
      Alert.alert('Error', 'Please enter both name and phone number.');
    }
  };

  const removeContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Button title="Remove" onPress={() => removeContact(item.id)} />
          </View>
        )}
      />
      <TextInput
        placeholder="Contact Name"
        value={newContactName}
        onChangeText={setNewContactName}
        style={styles.input}
      />
      <TextInput
        placeholder="Contact Phone"
        value={newContactPhone}
        onChangeText={setNewContactPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <Button title="Add Contact" onPress={addContact} />
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
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
  },
});

export default EmergencyContacts;
