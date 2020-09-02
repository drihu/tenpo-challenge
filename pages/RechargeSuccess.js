import React from 'react';
import { useHistory } from 'react-router-native';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import successIcon from '../assets/success.png';
import { formatPrice } from '../utils/price';

const Row = ({ attribute, value }) => (
  <View style={styles.row}>
    <View style={styles.rowLeft}>
      <Text style={styles.rowAttribute}>{attribute}:</Text>
    </View>
    <View style={styles.rowRight}>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  </View>
);

export default function RechargeSuccess() {
  const history = useHistory();
  const goIndex = () => history.push('/');
  const goRecharge = () => history.push('/recharge');

  return (
    <View>
      <View style={styles.hero}>
        <Image source={successIcon} style={styles.heroImage} />
        <Text style={styles.heroMessage}>Recarga exitosa</Text>
        <Text style={styles.heroAmount}>{formatPrice(5000)}</Text>
      </View>

      <View style={styles.resume}>
        <Row attribute="Compañía" value="Movistar" />
        <Row attribute="Descripción" value="Mi celular" />
        <Row attribute="Cod. transacción" value="#953209583943433" />
        <Row attribute="N° de teléfono" value="987654321" />
        <Row attribute="Fecha" value="27/06/2020" />
        <Row attribute="Hora" value="14:24" />

        <View style={styles.resumeAddRecharge}>
          <Text>Agregar a recargas frecuentes</Text>
          <CheckBox />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.message}>
          Te hemos enviado una copia de esta confirmación a tu correo
          correo@gmail.com
        </Text>

        <Button color="#35b098" title="HACER OTRA RECARGA" onPress={goRecharge} />
        <View style={styles.space}></View>
        <Button color="#cccccc" title="VOLVER AL INICIO" onPress={goIndex} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#221f48',
    padding: 15,
    paddingBottom: 60,
    textAlign: 'center',
  },
  heroImage: {
    marginBottom: 5,
  },
  heroMessage: {
    marginBottom: 5,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  heroAmount: {
    color: '#35b098',
    fontSize: 32,
    fontWeight: 'bold',
  },
  resume: {
    margin: 15,
    marginTop: -45,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  rowLeft: {
    width: '40%',
  },
  rowRight: {
    width: '60%',
  },
  rowAttribute: {
    color: '#757575',
    fontWeight: 'bold',
  },
  rowValue: {
    color: '#757575',
  },
  resumeAddRecharge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  message: {
    marginBottom: 15,
    color: '#757575',
  },
  container: {
    padding: 15,
  },
  space: {
    height: 15,
  },
});
