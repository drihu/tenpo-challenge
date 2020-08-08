import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from './components/layout';
import Recharge from './pages/Recharge';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />

        <Link to="/">
          <Text style={styles.link}>index</Text>
        </Link>
        <Link to="/pay-bills">
          <Text style={styles.link}>bill</Text>
        </Link>

        <View style={styles.main}>
          <Route exact path="/">
            <Redirect to="/recharge" />
          </Route>

          <Route exact path="/recharge">
            <Recharge />
          </Route>

          <Route exact path="/pay-bills">
            <Text>Pay Bills</Text>
          </Route>
        </View>

        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
  },
  link: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
