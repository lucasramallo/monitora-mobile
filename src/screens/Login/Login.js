import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert
} from 'react-native'; 
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, secondaryColor} from '../../../assets/colors/index'

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();
  
  const handleSubmit = () => {
    Alert.alert('Login realizado com sucesso!', `Matrícula: ${matricula}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View>
        <Text style={styles.titulo}>Login</Text>
  
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          placeholder="Ex.: 202019600020"
          placeholderTextColor="#A3A3A3"
          onChangeText={text => setMatricula(text)}
          value={matricula}
          keyboardType="numeric"
          style={styles.inputs}
        />
  
        <Text style={styles.label}>Senha</Text>
        <View
          style={[styles.senha, styles.inputs]}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#A3A3A3"
            onChangeText={text => setSenha(text)}
            value={senha}
            style={{
              width: "80%"
            }}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Octicons 
              name={mostrarSenha && "eye-closed" || "eye"} 
              size={18} 
              color="black" 
              styles={{margin: 15}}/>
          </TouchableOpacity>
        </View>
  
        <TouchableOpacity 
          onPress={() => navigation.navigate("Cadastro")}
          style={{alignSelf:"center"}}
        >
          <Text style={styles.linkLogin}>Esqueci minha senha</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          onPress={handleSubmit}
          style={styles.botao}
        >
          <Text style={styles.botao.texto}>Login</Text>
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={{alignSelf: "center", flexDirection: "row"}}
          onPress={() => navigation.navigate("Cadastro")}>
          <Text>Já tem uma conta? </Text><Text style={{fontWeight: "bold"}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
  },
  form: {
    width: '100%',
    height: '100%',
    padding: 45,
    justifyContent: "space-between"
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 45
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5
  },
  inputs: {
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20
  },
  senha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15
  },
  botao: {
    width: "100%",
    backgroundColor: "#212226",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    marginVertical: 25,
    texto: {
      color: "white",
      fontWeight: "bold",
    },
  },
  linkLogin: {
    textDecorationLine: "underline",
    marginBottom: 25
  }
});