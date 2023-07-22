import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { paddingContainer } from "../../../assets/constants";
import { Octicons } from "@expo/vector-icons";
import { primaryColor, secondaryColor, tertiaryColor } from "../../../assets/colors";

export default function NewPassword(){
	const [password, setPassword] = useState('');
	const [passwordCopy, setPasswordCopy] = useState('');
	const [showPassword, setShowPassword] = useState(true);
	const [disableCopy, setDisableCopy] = useState(true);
	const [strongness, setStrongness] = useState("No mínimo 8 caracteres");
	const navigation = useNavigation();
	
	const handleValidation = (value) => {
    if(value.length >= 8){
			if(value.match(/[a-z]/g) && value.match(/[A-Z]/g) && value.match(/[0-9]/g) || value.match(/[a-zA-Z0-9]/g) && value.match(/[^a-zA-Z0-9]/g)){
				setStrongness("Forte");
			} else if(value.match(/[A-z]/g) && value.match(/[0-9]/g) || value.match(/[A-Z]/g) && value.match(/[a-z]/g)){
				setStrongness("Segura");
			} else {
				setStrongness("Fraca");
			}
			setDisableCopy(false);
		} else {
			setStrongness("No mínimo 8 caracteres");
			setDisableCopy(true);
		}
  };
  
	
	const handleSubmit = () => {
		if(password.length >= 8){
			if(password == passwordCopy){
				navigation.navigate("Home");
			} else {
				Alert.alert("Inválido", "As senhas devem ser iguais!");
			}
		} else {
			Alert.alert("Inválido!", "A senha deve conter, no mínimo, 8 caracteres!");
		}
	};
	
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				{"Redefinir senha"}
			</Text>
			
			<View style={styles.inputLabelView}>
				<Text style={styles.label}>
	        {"Nova Senha"}
	      </Text>
	      <View style={[
	      	styles.input,
	      	validation(strongness).input
	      ]} >
	        <TextInput
	          placeholder="Digite sua nova senha"
	          placeholderTextColor="#A3A3A3"
	          selectionColor="black"
	          onChangeText={(text) => {
	          	setPassword(text);
	          	handleValidation(text);
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
	      <Text style={validation(strongness).warn}>{strongness}</Text>
      </View>
			
			<View style={styles.inputLabelView}>
				<Text style={styles.label}>
	        {"De novo"}
	      </Text>
	      <View style={[
	      	styles.input,
	      	disableCopy && validation().inputCopyDisabled
	      ]} >
	        <TextInput
	          placeholder="Digite de novo sua nova senha"
	          placeholderTextColor="#A3A3A3"
	          selectionColor="black"
	          editable={!disableCopy}
	          onChangeText={(text) => {
	          	setPasswordCopy(text);
	          	setStrongness(null);
	          }}
	          value={passwordCopy}
	          style={styles.passwordInput}
	          secureTextEntry={!showPassword}
	        />
	        <TouchableOpacity disabled={disableCopy} onPress={() => setShowPassword(!showPassword)}>
	          <Octicons 
	            name={showPassword ? "eye-closed" : "eye"} 
	            size={18} 
	            color="black" 
	            styles={styles.eyeIcon}/>
	        </TouchableOpacity>
	      </View>
      </View>
			
			<TouchableOpacity onPress={handleSubmit} style={styles.button}>
				<Text style={styles.button.label}>{"Redefinir"}</Text>
			</TouchableOpacity>
			
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddingContainer,
    backgroundColor: "white",
    padding: 80
  },
  title: {
    fontSize: 30,
    marginBottom: "10%",
    marginTop: '15%',
    color: primaryColor,
    fontFamily: 'Inter_700Bold',
  },
  label: {
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 5,
    fontSize: 16,
    color: '#4B4B4B'
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    padding: 15,
  },
  inputLabelView: {
    marginBottom: 20,
  },
  button: {
    width: "100%",
    backgroundColor: primaryColor,
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    marginVertical: 25,
  },
  "button.label": {
    color: "white",
    fontFamily: 'Inter_700Bold'
  },
});

const validation = passwordStrongness => {
	const warnColors = {green: "green", orange: "orange", red: "#B00000"};
	let validationColor = "#dcdcdc";
	
	if(passwordStrongness == "Forte"){
		validationColor = warnColors.green;
	} else if(passwordStrongness == "Segura"){
		validationColor = warnColors.orange;
	} else if(passwordStrongness == "Fraca" || passwordStrongness == "Senhas divergem!"){
		validationColor = warnColors.red;
	} 
	
	return StyleSheet.create({
			input: {
				borderColor: validationColor
			}, 
			inputCopyDisabled: {
				backgroundColor: "#efefef"
			},
			warn: {
				color: validationColor,
				marginLeft: 12
			}
		});
};