import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PriceCard({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.service} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  service: {
    flexDirection: 'row',
    width: '30%',
    marginBottom: 15,
    padding: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
