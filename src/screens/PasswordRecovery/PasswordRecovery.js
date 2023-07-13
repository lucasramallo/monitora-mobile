import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordRecovery(){
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const adicionaDominio = () => {
    setEmail(email + '@academico.ifpb.edu.br')
  }

  const handleSubmit = () => navigation.navigate("CodeVerification");
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Esqueceu sua Senha?</Text>
      <View style={styles.viewMessage}>
        <Text style={styles.message}>
          Digite o endereço de email previamente cadastrado por você. Enviaremos um email com o código de autenticação.
        </Text>
      </View>
      <TextInput 
        placeholder="Digite seu E-mail"
        placeholderTextColor="#A3A3A3"
        selectionColor="black"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      
      {
        (!email.includes('@') && email.length > 0) &&
          <TouchableOpacity 
            style={styles.domain}
            onPress={adicionaDominio}>
            <Text>
              @academico.ifpb.edu.br
            </Text>
          </TouchableOpacity>
      }
      
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.button.label}>Enviar</Text>
      </TouchableOpacity>
      </View>

        <TouchableOpacity style={{alignSelf: "center", flexDirection: "row"}}
          onPress={() => navigation.navigate("Login")}>
          <Text>Lembrou sua senha? </Text><Text style={{fontWeight: "bold"}}>Login</Text>
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
    paddingHorizontal: 45,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: "20%",
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
    padding: 3,
    margin: 5,
    borderWidth: 0.5,
    borderColor: "black",
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
      fontWeight: "bold",
    },
  },
  viewMessage: {
    marginVertical: 5,
  },
  message: {
    color: "#333"
  }
});
