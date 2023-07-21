import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, secondaryColor} from '../../../assets/colors/index';

export default function Register() {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [warnName, setWarnName] = useState(null);
  const [warnRegistrationNumber, setWarnRegistrationNumber] = useState(null);
  const [warnPassword, setWarnPassword] = useState(null);
  const [warnEmail, setWarnEmail] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 
  const navigation = useNavigation();

  const handleSubmit = () => {
    if(name.length > 2 && registrationNumber.length == 12 && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && password.length >= 8){
      Alert.alert('Cadastro realizado com sucesso!', `Nome: ${name}\nMatrícula: ${registrationNumber}`);
      navigation.navigate("SubjectSelection");
    } else {
      if(name.length < 3){
        setWarnName("Nome inválido");
      }
      if(registrationNumber.length != 12){
        setWarnRegistrationNumber("Matrícula inválida")
      }
      if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        setWarnEmail("Email inválido");
      }
      if(password.length < 8){
        setWarnPassword("Senha inválida");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>
          {"Crie sua conta"}
        </Text>
  
        <Text style={styles.label}>
          {"Nome"}
        </Text>
        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#A3A3A3"
          cursorColor="black"
          onChangeText={text => {
            setName(text);
            setWarnName(null);
          }}
          value={name}
          style={[
            styles.inputs,
            warnStyles(warnName).input
          ]}
        />
        {warnName && <Text style={warnStyles(warnName).warn}>{warnName}</Text>}
  
        <Text style={styles.label}>
          {"Matrícula"}
        </Text>
        <TextInput
          placeholder="Ex.: 202019600020"
          placeholderTextColor="#A3A3A3"
          cursorColor="black"
          onChangeText={text => {
            setRegistrationNumber(text);
            setWarnRegistrationNumber(null);
          }}
          value={registrationNumber}
          keyboardType="numeric"
          style={[
            styles.inputs,
            warnStyles(warnRegistrationNumber).input
          ]}
        />
        {warnRegistrationNumber && <Text style={warnStyles(warnRegistrationNumber).warn}>{warnRegistrationNumber}</Text>}
  
        <Text style={styles.label}>
          {"Email"}
        </Text>
        <TextInput
          placeholder="Ex.: Exemplo@academico.ifpb.edu.br"
          placeholderTextColor="#A3A3A3"
          autoComplete="email"
          cursorColor="black"
          onChangeText={text => {
            setEmail(text);
            setWarnEmail(null);
          }}
          value={email}
          style={[
            styles.inputs,
            warnStyles(warnEmail).input
          ]}
        />
        {warnEmail && <Text style={warnStyles(warnEmail).warn}>{warnEmail}</Text>}
  
        <Text style={styles.label}>
          {"Senha"}
        </Text>
        <View
          style={[
            styles.password, 
            styles.inputs,
            warnStyles(warnPassword).input
          ]}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#A3A3A3"
            cursorColor="black"
            onChangeText={text => {
              setPassword(text);
              setWarnPassword(null);
            }}
            value={password}
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Octicons 
              name={showPassword && "eye-closed" || "eye"} 
              size={18} 
              color="black" 
              styles={styles.eyeIcon}/>
          </TouchableOpacity>
        </View>
        {warnPassword && <Text style={warnStyles(warnPassword).warn}>{warnPassword}</Text>}
  
        <TouchableOpacity 
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.button.label}>
            {"Sign up"}
          </Text>
        </TouchableOpacity>
      </View>
  
      <TouchableOpacity style={styles.linkLogin}
        onPress={() => navigation.navigate("Login")}>
        <Text style={{fontFamily: 'Inter_400Regular'}}>
          {"Já tem uma conta? "}
        </Text>
        <Text style={styles.linkLoginBold}>
          {"Login"}
        </Text>
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
    marginVertical: 45,
    fontFamily: 'Inter_700Bold'
  },
  label: {
    marginBottom: 5,
    fontFamily: 'Inter_600SemiBold',
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
  passwordInput: { 
    backgroundColor: secondaryColor,
    width: "80%"
  },
  eyeIcon: {
    margin: 15
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
      fontFamily: 'Inter_700Bold'
    },
  },
  linkLogin: {
    alignSelf: "center", 
    flexDirection: "row"
  },
  linkLoginBold: {
    fontWeight: "bold"
  }
});

const warnStyles = warn => StyleSheet.create({
  input: {
    borderColor: warn ? "#B00000" : "#DCDCDC",
    marginBottom: warn ? 0 : 20
  },
  warn: {
    color: "#B00000",
    marginBottom: 20
  }
});