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
import { Picker } from '@react-native-picker/picker';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, secondaryColor} from '../../../assets/colors/index';

export default function Register() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const [disciplina, setDisciplina] = useState('PDM');
  const navigation = useNavigation();

  const handleSubmit = () => {
    Alert.alert('Cadastro realizado com sucesso!', `Nome: ${nome}\nMatrícula: ${matricula}\nDisciplina:${disciplina}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.titulo}>Crie sua conta</Text>
  
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#A3A3A3"
          onChangeText={text => setNome(text)}
          value={nome}
          style={styles.inputs}
        />
  
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
              backgroundColor: secondaryColor,
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
  
        <Text style={styles.label}>Disciplina</Text>
        <View style={[styles.inputs, {padding:0}]}>
        <Picker
          selectedValue={disciplina}
          onValueChange={(item) => setDisciplina(item)}
          prompt="Disciplinas disponíveis:"
          mode="dropdown"
          style={{border: "none", outline: "none", background: "none"}}
        >
          <Picker.Item label="PDM" value="PDM" />
          <Picker.Item label="DAW II" value="DAW II" />
          <Picker.Item label="Estrutura de Dados" value="ED" />
          <Picker.Item label="Física" value="Física" />
          <Picker.Item label="Matemática" value="Matemática" />
        </Picker>
        </View>
  
        <TouchableOpacity 
          onPress={handleSubmit}
          style={styles.botao}
        >
          <Text style={styles.botao.texto}>Sign up</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={{alignSelf:"center"}}
        >
          <Text style={styles.linkLogin}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor
  },
  form: {
    width: '100%',
    height: '100%',
    padding: 45,
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
    marginBottom: 20,
  },
  senha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15
  },
  botao: {
    width: "100%",
    backgroundColor: primaryColor,
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
    textDecorationLine: "underline"
  }
});
