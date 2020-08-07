import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import left from '../assets/return.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.left} source={left} />
      </View>
      <View>
        <Text>TU PLATA DISPONIBLE</Text>
        <Text style={styles.cash}>$ 70.000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
