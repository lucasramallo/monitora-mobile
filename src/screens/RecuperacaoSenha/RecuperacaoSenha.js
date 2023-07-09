import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';

export default function RecuperacaoSenha(){
  const [mensagem, setMensagem] = useState('Digite o endereço de email previamente cadastrado por você. Enviaremos um email com o código de autenticação.');
  const [email, setEmail] = useState('');


  const adicionaDominio = () => {
    setEmail(email + '@academico.ifpb.edu.br')
  }

  const envia = () => 0;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recuperação de Senha</Text>
      <View style={styles.viewMensagem}>
        <Text style={styles.mensagem}>
          {mensagem}
        </Text>
      </View>
      <TextInput 
        placeholder="Email"
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
  )
}

const styles = StyleSheet.create({
  back: {
    alignSelf: "left"
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 45,
    backgroundColor: "white"
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: '40%',
    marginBottom: 10
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