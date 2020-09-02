import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import { View, StyleSheet, Modal, Text, Image, Button } from 'react-native';

import { Container } from '../components/layout';
import { Title, Subtitle, Input } from '../components/styled';
import PriceCard from '../components/PriceCard';
import greenArrow from '../assets/right-green-arrow.png';
import { formatPrice } from '../utils/price';

export default function RechargeForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const goIndex = () => history.push('/');
  const goSuccess = () => history.push('/recharge-success');

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
        {[1000, 2000, 5000, 10000, 20000, 50000].map((price, index) => (
          <PriceCard
            text={formatPrice(price)}
            key={index}
            onPress={toggleModal}
          />
        ))}
      </View>

      <View style={styles.custome}>
        <Input style={styles.customeInput} placeholder="Ingresa un monto" />
        <Button
          color="#35b098"
          title="    Recargar    "
          onPress={toggleModal}
        />
      </View>

      {/* MODAL */}
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.resume}>
            <Title>Resume</Title>
            <Subtitle>Confirma los datos de tu recarga</Subtitle>

            <View style={styles.checkout}>
              <Text style={styles.amount}>$ 5.000</Text>
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
              onPress={goSuccess}
            />
            <View style={styles.space}></View>
            <Button color="#cccccc" title="VOLVER" onPress={toggleModal} />
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
  custome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  customeInput: {
    width: '60%',
    marginTop: 20,
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
