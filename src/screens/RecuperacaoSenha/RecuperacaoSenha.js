import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RecuperacaoSenha(){
  const [mensagem, setMensagem] = useState('Digite o endereço de email previamente cadastrado por você. Enviaremos um email com o código de autenticação.');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const adicionaDominio = () => {
    setEmail(email + '@academico.ifpb.edu.br')
  }

  const envia = () => 0;
  
  return (
    <View style={styles.container}>
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.titulo}>Esqueceu sua Senha?</Text>
      <View style={styles.viewMensagem}>
        <Text style={styles.mensagem}>
          {mensagem}
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
            style={styles.atalho}
            onPress={adicionaDominio}>
            <Text>
              @academico.ifpb.edu.br
            </Text>
          </TouchableOpacity>
      }
      
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botao.texto}>Enviar</Text>
      </TouchableOpacity>
      </View>

        <TouchableOpacity style={{alignSelf: "center", flexDirection: "row"}}
          onPress={() => navigation.navigate("Login")}>
          <Text>Lembrou sua senha? </Text><Text style={{fontWeight: "bold"}}>Login</Text>
        </TouchableOpacity>
    </View>
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
    padding: 45,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  titulo: {
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
  atalho: {
    padding: 3,
    margin: 5,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 12
  },
  botao: {
    width: "100%",
    backgroundColor: "#212226",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    marginTop: 45,
    texto: {
      color: "white",
      fontWeight: "bold",
    },
  },
  viewMensagem: {
    marginVertical: 5,
  },
  mensagem: {
    color: "#333"
  }
});