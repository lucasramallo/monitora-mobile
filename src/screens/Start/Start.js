import * as React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import ImageAvatar from '../../../assets/img/AvatarInicio.png';
import Background from '../../../assets/img/BackgroundInicio.png';
import { useNavigation } from '@react-navigation/native';
import { primaryColor } from '../../../assets/colors/index';

export default function Start() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={{ flex: 1, width: '100%' }}>
      <View style={{ flex: 1, padding: 35 }}>
        <Image source={ImageAvatar} style={{ marginTop: '25%' }} />
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Seja bem-vindo ao Monitóra App</Text>
          <Text style={styles.subTitulo}>
            Gerencie sua monitoria, de forma simples, em um só lugar
          </Text>
        </View>
        <View style={styles.botoesView}>
          <TouchableOpacity
            style={styles.botaoCadastro}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{ color: 'white', fontSize: 17}}>Registrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoLogin}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#212226', fontSize: 17}}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    margin: 20,
    marginTop: '25%',
    gap: 25,
  },
  titulo: {
    color: primaryColor,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitulo: {
    fontSize: 17,
    color: '#949ba5',
    textAlign: 'center',
    marginBottom: 20
  },
  botoesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  botaoCadastro: {
    padding: 15,
    width: '45%',
    borderRadius: 15,
    backgroundColor: primaryColor,
    alignItems: 'center',
  },
  botaoLogin: {
    padding: 15,
    width: '40%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
});
