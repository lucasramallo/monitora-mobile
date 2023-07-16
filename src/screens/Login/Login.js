import React, { useState } from 'react';
import { Text, View,  StyleSheet,  TouchableOpacity,  TextInput,  SafeAreaView,  Alert} from 'react-native'; 
import { Octicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, secondaryColor} from '../../../assets/colors/index'
import { useDispatch } from 'react-redux'
import { logar } from '../../redux/user/slice';
import { paddingContainer } from '../../../assets/constants';

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
          <Text style={styles.title}>
            {"Login"}
          </Text>
    
          <Text style={styles.label}>
            {"Matrícula"}
          </Text>
          <TextInput
            placeholder="Ex.: 202019600020"
            placeholderTextColor="#A3A3A3"
            selectionColor="black"
            onChangeText={text => setRegistrationNumber(text)}
            value={registrationNumber}
            keyboardType="numeric"
            style={styles.inputs}
          />
    
          <Text style={styles.label}>
            {"Senha"}
          </Text>
          <View
            style={[
              styles.password, 
              styles.inputs
            ]}
          >
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#A3A3A3"
              selectionColor="black"
              onChangeText={text => setPassword(text)}
              value={password}
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Octicons 
                name={showPassword ? "eye-closed" : "eye"} 
                size={18} 
                color="black" 
                styles={styles.eyeIcon}/>
            </TouchableOpacity>
          </View>
    
          <TouchableOpacity 
            style={styles.passwordRecoveryLink}
            onPress={() => navigation.navigate("PasswordRecovery")}
          >
            <Text style={styles.linkLogin}>
              {"Esqueci minha senha"}
            </Text>
          </TouchableOpacity>
    
          <TouchableOpacity 
            onPress={handleSubmit}
            style={styles.button}
          >
            <Text style={styles.button.label}>
              {"Login"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.registerLink}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontFamily: 'Inter_500Medium', }}>
            {"Ainda não tem uma conta? "}
          </Text>
          <Text style={styles.signupLink}>
            {"Sign up"}
          </Text>
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
    paddingHorizontal: paddingContainer,
  },
  form: {
    width: '100%',
    height: '100%',
    padding: 8,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 26,
    marginVertical: 45,
    marginBottom: 50,
    fontFamily: 'Inter_700Bold'
  },
  label: {
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 5,
    fontSize: 16,
    color: '#4B4B4B'
  },
  inputs: {
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    height: 60
  },
  passwordInput: {
    width: "80%"
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15
  },
  eyeIcon: {
    margin: 15
  },
  passwordRecoveryLink: {
    alignSelf: "center"
  },
  registerLink: {
    alignSelf: "center", 
    flexDirection: "row",
    marginBottom: '25%'
  },
  signupLink: {
    fontWeight: "bold"
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
      fontSize: 16,
      fontFamily: 'Inter_700Bold',
    }, 
  },
  linkLogin: {
    textDecorationLine: "underline",
    marginBottom: 25,
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  }
});