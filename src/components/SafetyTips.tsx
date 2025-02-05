import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const tips = [
  'Share your location with a trusted person.',
  'Avoid dark and isolated areas when alone.',
  'Be aware of your surroundings.',
  'Keep emergency contacts on speed dial.',
  'Carry a personal safety alarm or pepper spray.'
];

const SafetyTips: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Tips</Text>
      <FlatList
        data={tips}
        renderItem={({ item }) => <Text style={styles.tipItem}>{item}</Text>}
        keyExtractor={(_, index) => index.toString()}
      />
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
  tipItem: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default SafetyTips;
