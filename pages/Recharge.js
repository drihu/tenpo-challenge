import React from 'react';
import { Link } from 'react-router-native';

import { Container } from '../components/layout';
import { Title, Subtitle } from '../components/styled';
import ServiceCard from '../components/ServiceCard';
import smartphone from '../assets/smartphone.png';
import tv from '../assets/tv.png';
import usb from '../assets/usb.png';
import phone from '../assets/phone.png';

export default function Recharge() {
  return (
    <Container>
      <Title>Recargas</Title>
      <Subtitle>Servicios Disponibles</Subtitle>

      <Link to="/recharge-form">
        <ServiceCard icon={smartphone} text="Telefonía Móvil" />
      </Link>

      <Link to="/recharge-form">
        <ServiceCard icon={tv} text="Televisión" />
      </Link>

      <Link to="/recharge-form">
        <ServiceCard icon={usb} text="Banda Ancha Móvil" />
      </Link>

      <Link to="/recharge-form">
        <ServiceCard icon={phone} text="Telefonía Fija" />
      </Link>
    </Container>
  );
}
