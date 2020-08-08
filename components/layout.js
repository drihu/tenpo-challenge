import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import left from '../assets/return.png';

export const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Header = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={goBack}>
          <Image style={styles.left} source={left} />
        </TouchableOpacity>
      </View>

      <View>
        <Text>TU PLATA DISPONIBLE</Text>
        <Text style={styles.cash}>$ 70.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 28,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  left: {
    resizeMode: 'center',
    marginRight: 10,
  },
  cash: {
    fontWeight: '700',
  },
});
