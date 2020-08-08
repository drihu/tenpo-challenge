import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ServiceCard({ icon, text }) {
  return (
    <View style={styles.service}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    width: 100,
    fontSize: 12,
  },
});
