import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import { View, StyleSheet, Modal, Text, Image, Button } from 'react-native';

import { Container } from '../components/layout';
import { Title, Subtitle, Input } from '../components/styled';
import PriceCard from '../components/PriceCard';
import greenArrow from '../assets/right-green-arrow.png';

export default function RechargeForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = () => setIsModalVisible(true);
  const goIndex = () => history.push('/');

  return (
    <Container>
      <Subtitle>Tipo de recarga</Subtitle>
      <Input value="Telefonía Móvil" />

      <Subtitle>Empresa</Subtitle>
      <Input value="Movistar" />

      <Subtitle>N° de teléfono</Subtitle>
      <Input value="982654321" />

      <Subtitle>Monto a recargar</Subtitle>
      <View style={styles.pricesList}>
        {[
          '$ 1.000',
          '$ 2.000',
          '$ 5.000',
          '$ 10.000',
          '$ 20.000',
          '$ 50.000',
        ].map((price, index) => (
          <PriceCard text={price} key={index} onPress={showModal} />
        ))}
      </View>

      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.resume}>
            <Title>Resume</Title>
            <Subtitle>Confirma los datos de tu descarga</Subtitle>

            <View style={styles.checkout}>
              <Text style={styles.amount}>$ 1.000</Text>
              <Image style={styles.arrow} source={greenArrow} />
              <View>
                <Text style={styles.info}>Movistar</Text>
                <Text style={styles.info}>Telefonía Móvil</Text>
                <Text style={styles.phoneNumber}>987654321</Text>
              </View>
            </View>

            <Button
              color="#35b098"
              title="CONFIRMAR RECARGA"
              onPress={goIndex}
            />
            <View style={styles.space}></View>
            <Button color="#cccccc" title="VOLVER" onPress={goIndex} />
          </View>
        </View>
      </Modal>
    </Container>
  );
}

const styles = StyleSheet.create({
  pricesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modal: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  resume: {
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  checkout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    resizeMode: 'center',
    marginRight: 10,
  },
  info: {
    color: '#a0a0a0',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  phoneNumber: {
    color: '#333333',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  space: {
    height: 15,
  },
});
