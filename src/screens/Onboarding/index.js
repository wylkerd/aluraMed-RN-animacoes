import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import FundoOndulado from '../../components/FundoOndulado';
import { TelaDeFundo } from '../../components/TelaDeFundo';
import { Formulario } from '../../components/Formulario';
import itens from './cards';
import styles from './styles';
import { Carrossel } from '../../components/Carrossel';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  function avancar() {
    if (fazerLogin) {
      navigation.navigate('Principal');
    } else {
      setAltura(400);
      setFazerLogin(true);
    }
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.carrosselArea}>
          {!fazerLogin && (
            <Carrossel data={itens}/>
          )}
        </View>
        <Image
          source={require('../../assets/medica.png')}
          style={styles.medicaImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ?
              <Formulario
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações. Senão tiver uma conta ainda crie uma agora"
              />
              :
              <View>
                <Text style={styles.titulo}>Gerencie as suas consultas</Text>
                <Text style={styles.texto}>
                  Você consegue gerenciar todas suas consultas e ver o tempo médio de cada, e a quantidade de consultas realizadas.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>{fazerLogin ? 'Entrar' : 'Começar'}</Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}