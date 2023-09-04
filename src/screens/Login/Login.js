import React, { useState } from 'react';
import { Text, View,  StyleSheet,  TouchableOpacity,  TextInput,  SafeAreaView,  Alert} from 'react-native'; 
import { Octicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, secondaryColor} from '../../../assets/colors/index';
import { useDispatch } from 'react-redux';
import { logar } from '../../redux/user/slice';
import { paddingContainer } from '../../../assets/constants';

export default function Login() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [warn1, setWarn1] = useState(null);
  const [warn2, setWarn2] = useState(null);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(registrationNumber.length == 12 && password.length >= 8){
      setWarn1(null);
      setWarn2(null);
      dispatch(logar(registrationNumber));
      // navigation.navigate("Home");
      Alert.alert("✅ Login efetuado com sucesso!");
    } else if(registrationNumber.length != 12){
      Alert.alert("Matrícula inválida", "Digite uma matrícula válida!");
      setWarn1("Matricula inválida");
    } else {
      Alert.alert("Senha inválida", "Digite sua senha!");
      setWarn2("Senha inválida");
    }
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
            onChangeText={text => {
              setRegistrationNumber(text);
              setWarn1(null);
            }}
            value={registrationNumber}
            keyboardType="numeric"
            style={[
              styles.inputs,
              warnStyles(warn1).input
            ]}
          />
          {warn1 && <Text style={warnStyles(warn1).warn}>{warn1}</Text>}
    
          <Text style={styles.label}>
            {"Senha"}
          </Text>
          <View
            style={[
              styles.password, 
              styles.inputs,
              warnStyles(warn2).input
            ]}
          >
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#A3A3A3"
              selectionColor="black"
              onChangeText={text => {
                setPassword(text);
                setWarn2(null);
              }}
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
          {warn2 && <Text style={warnStyles(warn2).warn}>{warn2}</Text>}
    
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
    marginBottom: 20,
    borderRadius: 12,
    padding: 15,
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

const warnStyles = warn => StyleSheet.create({
	input: {
		borderColor: warn ? "#B00000" : "#DCDCDC",
		marginBottom: warn ? 0 : 20
	},
	warn: {
		color: "#B00000",
		marginLeft: 12,
		marginBottom: 20
	}
});