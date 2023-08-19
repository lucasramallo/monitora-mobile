import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { primaryColor, tertiaryColor } from '../../../assets/colors/index';
import { paddingContainer } from '../../../assets/constants';

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [warn, setWarn] = useState(null);
  const navigation = useNavigation();

  const adicionaDominio = () => {
    setEmail(email + '@academico.ifpb.edu.br');
    setWarn(null);
  }

  const handleSubmit = () => {
    if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
      navigation.navigate("CodeVerification", { email });
    } else {
      Alert.alert("Email inválido", "Digite um email válido.");
      setWarn("Email inválido");
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstPartView}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons 
            name="chevron-back" 
            size={18} 
            color="black"
          />
        </TouchableOpacity>
        
        <Text style={styles.title}>
          {"Esqueceu sua Senha?"}
        </Text>
        <View style={styles.viewMessage}>
          <Text style={styles.message}>
            {"Digite o endereço de email previamente cadastrado por você. Enviaremos um email com o código de autenticação."}
          </Text>
        </View>
        <TextInput 
          placeholder="Digite seu E-mail"
          placeholderTextColor={tertiaryColor}
          selectionColor="black"
          style={[
            styles.input, 
            warnStyles(warn).input
          ]}
          value={email}
          onChangeText={text => {
            setEmail(text);
            setWarn(null);
          }}
        />
        
        {
          (!email.includes('@') && email.length > 0) &&
            <TouchableOpacity 
              style={styles.domain}
              onPress={adicionaDominio}>
              <Text style={{color: '#4D4D4D'}}>
                {"@academico.ifpb.edu.br"}
              </Text>
            </TouchableOpacity> || 
            <Text style={warnStyles(warn).warn}>{warn}</Text>
        }
        
        <TouchableOpacity 
          onPress={handleSubmit} 
          style={styles.button}
        >
          <Text style={styles.button.label}>
            {"Enviar"}
          </Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity 
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontFamily: 'Inter_400Regular' }}>
            {"Lembrou sua senha? "}
          </Text>
          <Text style={styles.loginLinkBold}>
            {"Login"}
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  back: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#cdcdcd",
    borderRadius: 15,
    width: 50,
    text: {
      fontSize: 18
    }
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: paddingContainer,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  firstPartView: {
    width: "100%"
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    marginBottom: "1%",
    marginTop: '15%',
    color: primaryColor,
  },
  message: {
    color: tertiaryColor,
    fontSize: 16,
    fontFamily: 'Inter_400Regular'
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    width: "100%",
  },
  domain: {
    padding: 10,
    margin: 5,
    borderWidth: 0.5,
    borderColor: "#dcdcdc",
    borderRadius: 12,
    alignSelf: "center"
  },
  button: {
    width: "100%",
    backgroundColor: "#212226",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    marginTop: 45,
    label: {
      color: "white",
      fontSize: 18,
      fontFamily: 'Inter_700Bold'
    },
  },
  loginLink: {
    alignSelf: "center", 
    flexDirection: "row",
    fontFamily: 'Inter_400Regular'
  },
  loginLinkBold: {
    fontFamily: 'Inter_700Bold'
  },
  viewMessage: {
    marginVertical: 5,
  }
});

const warnStyles = warn => StyleSheet.create({
  input: {
    borderColor: warn ? "#900000" : "#dcdcdc"
  },
  warn: {
    marginLeft: 12,
    color: "#900000"
  }
});