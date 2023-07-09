import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default function RecuperacaoSenha(){
  const emailFornecido = 'raykkoner@gmail.com'; // E-mail fornecido
  const codigoGerado = '12345';
  const [contagem, setContagem] = useState(20); // Segundos de intervalo para reenviar
  const [codigo, setCodigo] = useState(''); // Código digitado
  const [reenviar, setReenviar] = useState(false); // Permite reenviar o código
  const navigation = useNavigation(); 
  const codeInputRef = useRef();

  // Ação quando o código é completamente digitado
  const testaCodigo = (code) => {
    // Verifica se o código está correto
    if(code == codigoGerado){
      Alert.alert("Autenticado!")
    } else {
      codeInputRef.current.shake();
    }
  };
  
  // Contagem de intervalo para reenviar código
  useEffect(() => {
    let contar = setInterval(function () {
      if(contagem > 0){
        setContagem(contagem-1);
      } else {
        setReenviar(true);
        clearInterval(contar);
      }
    }, 1000);
    return () => clearInterval(contar);
  }, [contagem]);
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
      
      <Text style={styles.titulo}>Insira o código</Text>
      <View style={styles.viewMensagem}>
        <Text style={styles.mensagem}>
          Enviamos um código de altenticação ao endereço de e-mail: <Text style={{fontWeight: "800", color: "#000"}}>{emailFornecido}</Text>. Por favor verifique sua caixa de entrada e sua caixa de spam.
        </Text>
      </View>
      
      <SmoothPinCodeInput
            ref={codeInputRef}
            cellStyle={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 12,
            }}
            textStyle={{
              color: "black",
              fontSize: 25
            }}
            cellStyleFocused={{
              borderColor: 'black',
            }}
            codeLength={5}
            cellSize={60}
            value={codigo}
            onTextChange={code => setCodigo( code)}
            onFulfill={testaCodigo}
            />
      
      
      <TouchableOpacity 
      disabled={!reenviar} 
      style={{ backgroundColor: reenviar && "#212226" || "#aaa", width: "100%", alignItems: "center", borderRadius: 12, padding: 15, marginTop: 80 }}
      onPress={() => {
        setContagem(20);
        setReenviar(false);
      }}
      >
        <Text style={styles.botaoTexto}>Reenviar</Text>
      </TouchableOpacity>
      </View>

        <Text style={{alignSelf: "center", flexDirection: "row"}}>Não chegou? Re-envie o código{!reenviar && <> em <Text style={{fontWeight: "bold"}}>{contagem}s</Text></>}.
        </Text>
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
  viewMensagem: {
    marginBottom: "10%",
  },
  mensagem: {
    color: "#333"
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },
});