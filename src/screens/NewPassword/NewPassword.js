import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { paddingContainer } from "../../../assets/constants";
import { Octicons } from "@expo/vector-icons";
import { primaryColor, secondaryColor, tertiaryColor } from "../../../assets/colors";

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [passwordCopy, setPasswordCopy] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {"Redefinir senha"}
      </Text>

      <Text style={styles.label}>
        {"Nova Senha"}
      </Text>
      <View style={styles.input} >
        <TextInput
          placeholder="Digite sua nova senha"
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
            styles={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>
        {"De novo"}
      </Text>
      <View style={styles.input} >
        <TextInput
          placeholder="Digite de novo sua nova senha"
          placeholderTextColor="#A3A3A3"
          selectionColor="black"
          onChangeText={text => setPasswordCopy(text)}
          value={passwordCopy}
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Octicons
            name={showPassword ? "eye-closed" : "eye"}
            size={18}
            color="black"
            styles={styles.eyeIcon} />
        </TouchableOpacity>
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
