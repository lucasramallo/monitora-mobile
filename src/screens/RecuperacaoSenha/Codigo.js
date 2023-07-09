import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RecuperacaoSenha(){
  const [mensagem, setMensagem] = useState('Digite o endereço de email previamente cadastrado por você. Enviaremos um email com o código de autenticação.');
  const emailFornecido = 'raykkoner@gmail.com'; // E-mail fornecido
  const [contagem, setContagem] = useState(20);
  const [codigo, setCodigo] = useState([]);
  const navigation = useNavigation();

  const envia = () => 0;
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.titulo}>Insira o código</Text>
      <View style={styles.viewMensagem}>
        <Text style={styles.mensagem}>
          Enviamos um código de altenticação ao endereço de e-mail: {emailFornecido}. Por favor verifique sua caixa de entrada e sua caixa de spam.
        </Text>
      </View>
      
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          selectionColor="black"
          style={styles.input}
          value={codigo[0] || ""}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={n => setCodigo([n, ...codigo.slice(1)])}
        />
        <TextInput
          selectionColor="black"
          style={styles.input}
          value={codigo[1] || ""}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={n => setCodigo([codigo[0], n, ...codigo.slice(2)])}
        />
        <TextInput
          selectionColor="black"
          style={styles.input}
          value={codigo[2] || ""}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={n => setCodigo([...codigo.slice(0, 2), n, ...codigo.slice(3)])}
        />
        <TextInput
          selectionColor="black"
          style={styles.input}
          value={codigo[3] || ""}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={n => setCodigo([...codigo.slice(0, 3), n, ...codigo.slice(4)])}
        />
        <TextInput
          selectionColor="black"
          style={styles.input}
          value={codigo[4] || ""}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={n => setCodigo([...codigo.slice(0, 4), n, ...codigo.slice(5)])}
        />
      </View>
      
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botao.texto}>Re-enviar</Text>
      </TouchableOpacity>
      </View>

        <TouchableOpacity style={{alignSelf: "center", flexDirection: "row"}}
          onPress={() => navigation.navigate("Login")}>
          <Text>Não chegou? Re-envie o código em </Text><Text style={{fontWeight: "bold"}}>{contagem}s</Text>
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
    width: "18%",
    textAlign: "center"
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