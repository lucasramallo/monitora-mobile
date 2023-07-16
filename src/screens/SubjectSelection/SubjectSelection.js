import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { paddingContainer } from "../../../assets/constants";
import { Ionicons } from "@expo/vector-icons";
import { primaryColor, tertiaryColor } from "../../../assets/colors";

export default function SubjectSelection() {
	const [subject, setSubject] = useState("PDM");
	const navigation = useNavigation();
	
	const handleSubmit = () => 0;
	
  return (
    <SafeAreaView style={styles.container}>
    	<TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={18} color="black" />
      </TouchableOpacity>
        
      <Text style={styles.title}>
        {"Disciplina"}
      </Text>
        
      <View style={styles.messageView}>
        <Text style={styles.message}>
          {"Qual disciplina você está monitorando?"}
        </Text>
      </View>
      
      <View style={styles.pickerView}>
        <Picker
          selectedValue={subject}
          onValueChange={(item) => setSubject(item)}
          mode="dropdown"
          style={styles.picker}
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
        <Text style={styles.button.label}>
          {"Continuar"}
        </Text>
      </TouchableOpacity>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: paddingContainer,
    backgroundColor: "white",
  },
  backButton: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#cdcdcd",
    borderRadius: 15,
    width: 50,
  },
  title: {
    fontSize: 30,
    marginBottom: "1%",
    marginTop: '15%',
    color: primaryColor,
    fontFamily: 'Inter_700Bold'
  },
  messageView: {
    marginBottom: "10%",
  },
  message: {
    color: tertiaryColor,
    fontSize: 16,
    fontFamily: 'Inter_400Regular'
  },
  pickerView: {
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    padding: 0
  },
  picker: {
    border: "none", 
    outline: "none", 
    background: "none" 
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
});