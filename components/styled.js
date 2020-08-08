import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export const Subtitle = ({ children }) => (
  <Text style={styles.subtitle}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#757575',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
