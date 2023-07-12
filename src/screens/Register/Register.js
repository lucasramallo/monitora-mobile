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
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [subject, setSubject] = useState('PDM');
  const navigation = useNavigation();

  const handleSubmit = () => {
    Alert.alert('Cadastro realizado com sucesso!', `Nome: ${name}\nMatrícula: ${registrationNumber}\nDisciplina:${subject}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Crie sua conta</Text>
  
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#A3A3A3"
          selectionColor="black"
          onChangeText={text => setName(text)}
          value={name}
          style={styles.inputs}
        />
  
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          placeholder="Ex.: 202019600020"
          placeholderTextColor="#A3A3A3"
          selectionColor="black"
          onChangeText={text => setRegistrationNumber(text)}
          value={registrationNumber}
          keyboardType="numeric"
          style={styles.inputs}
        />
  
        <Text style={styles.label}>Senha</Text>
        <View
          style={[styles.password, styles.inputs]}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#A3A3A3"
            selectionColor="black"
            onChangeText={text => setPassword(text)}
            value={password}
            style={{ 
              backgroundColor: secondaryColor,
              width: "80%"
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Octicons 
              name={showPassword && "eye-closed" || "eye"} 
              size={18} 
              color="black" 
              styles={{margin: 15}}/>
          </TouchableOpacity>
        </View>
  
        <Text style={styles.label}>Disciplina</Text>
        <View style={[styles.inputs, {padding:0}]}>
        <Picker
          selectedValue={subject}
          onValueChange={(item) => setSubject(item)}
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
          style={styles.button}
        >
          <Text style={styles.button.label}>Sign up</Text>
        </TouchableOpacity>
      </View>
  
      <TouchableOpacity style={{alignSelf: "center", flexDirection: "row"}}
        onPress={() => navigation.navigate("Login")}>
        <Text>Já tem uma conta? </Text><Text style={{fontWeight: "bold"}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
    padding: 45,
    justifyContent: "space-around"
  },
  form: {
    width: '100%',
    height: '100%',
  },
  title: {
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
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15
  },
  button: {
    width: "100%",
    backgroundColor: primaryColor,
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    marginVertical: 25,
    label: {
      color: "white",
      fontWeight: "bold",
    },
  },
  linkLogin: {
    textDecorationLine: "underline"
  }
});
