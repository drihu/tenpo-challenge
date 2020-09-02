import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from './components/layout';
import Recharge from './pages/Recharge';
import RechargeForm from './pages/RechargeForm';
import RechargeSuccess from './pages/RechargeSuccess';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />

        <View style={styles.main}>
          <Route exact path="/">
            <Redirect to="/recharge" />
          </Route>

          <Route exact path="/recharge">
            <Recharge />
          </Route>

          <Route exact path="/recharge-form">
            <RechargeForm />
          </Route>

          <Route exact path="/recharge-success">
            <RechargeSuccess />
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
