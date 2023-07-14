import * as React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
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
      style={styles.container}>
      <View style={styles.content}>
        <Image source={ImageAvatar} style={styles.imageAvatar} />
        <View style={styles.subcontent}>
          <Text style={styles.title}>
            {"Seja bem-vindo ao Monitora App"}
          </Text>
          <Text style={styles.subtitle}>
            {"Gerencie sua monitoria, de forma simples, em um só lugar"}
          </Text>
        </View>
        
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonRegister.label}>
              {"Registrar-se"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonLogin.label}>
              {"Entrar"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%'
  },
  content: {
    flex: 1, 
    padding: 35
  },
  imageAvatar: {
    marginTop: "25%"
  },
  subcontent: {
    margin: 20,
    marginTop: '25%',
    gap: 25,
  },
  title: {
    color: primaryColor,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#949ba5',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonRegister: {
    padding: 15,
    width: '45%',
    borderRadius: 15,
    backgroundColor: primaryColor,
    alignItems: 'center',
    label: { 
      color: 'white', 
      fontSize: 17
    }
  },
  buttonLogin: {
    padding: 15,
    width: '45%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    label: { 
      color: '#212226', 
      fontSize: 17
    }
  },
});
