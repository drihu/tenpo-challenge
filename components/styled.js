import React from 'react';
import { Text, TextInput, Button, StyleSheet } from 'react-native';

export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export const Subtitle = ({ children }) => (
  <Text style={styles.subtitle}>{children}</Text>
);

export const Input = (props) => {
  const { style, ...other } = props;
  return <TextInput style={{ ...style, ...styles.control }} {...other} />;
};

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
  control: {
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    color: '#757575',
    fontSize: 16,
    fontWeight: '300',
  },
});
