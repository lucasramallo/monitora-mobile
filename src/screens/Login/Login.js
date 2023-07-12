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
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, secondaryColor} from '../../../assets/colors/index'
import { useDispatch } from 'react-redux'
import { logar } from '../../redux/user/slice';

export default function Login() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logar(registrationNumber))

    navigation.navigate("Horarios")
    // Alert.alert('Login realizado com sucesso!', `Matrícula: ${registrationNumber}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View>
          <Text style={styles.title}>Login</Text>
    
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
    
          <TouchableOpacity 
            onPress={() => navigation.navigate("PasswordRecovery")}
            style={{alignSelf:"center"}}
          >
            <Text style={styles.linkLogin}>Esqueci minha senha</Text>
          </TouchableOpacity>
    
          <TouchableOpacity 
            onPress={handleSubmit}
            style={styles.button}
          >
            <Text style={styles.button.label}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{alignSelf: "center", flexDirection: "row"}}
          onPress={() => navigation.navigate("Register")}>
          <Text>Ainda não tem uma conta? </Text><Text style={{fontWeight: "bold"}}>Sign up</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryColor,
    paddingTop: Constants.statusBarHeight,
  },
  form: {
    width: '100%',
    height: '100%',
    padding: 45,
    justifyContent: "space-between"
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
    marginBottom: 20
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15
  },
  button: {
    width: "100%",
    backgroundColor: "#212226",
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
    textDecorationLine: "underline",
    marginBottom: 25
  }
});