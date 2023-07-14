import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

export default function CodeVerification(){
  const email = "raykkoner@gmail.com";
  const generatedCode = "12345";
  const [secondsToResend, setSecondsToResend] = useState(20);
  const [typedCode, setTypedCode] = useState("");
  const [shouldResend, setShouldResend] = useState(false);
  const navigation = useNavigation(); 
  const codeInputRef = useRef();

  
  const compareCode = (typedCode) => {
    if(typedCode == generatedCode){
      Alert.alert("Autenticado!")
    } else {
      codeInputRef.current.shake();
    }
  };
  
  useEffect(() => {
    let countDown = setInterval(function () {
      if(secondsToResend > 0){
        setSecondsToResend(secondsToResend-1);
      } else {
        setShouldResend(true);
        clearInterval(countDown);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [secondsToResend]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPartView}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="chevron-back" size={18} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.title}>
          {"Insira o código"}
        </Text>
        
        <View style={styles.messageView}>
          <Text style={styles.message}>
            {"Enviamos um código de altenticação ao endereço de e-mail: "}
            <Text style={styles.bold}>
              {email}
            </Text>
            {". Por favor verifique sua caixa de entrada e sua caixa de spam."}
          </Text>
        </View>
        
        <SmoothPinCodeInput
          ref={codeInputRef}
          cellStyle={styles.codeCell}
          textStyle={styles.codeText}
          cellStyleFocused={styles.codeCellFocused}
          codeLength={5}
          cellSize={60}
          value={typedCode}
          onTextChange={typedCode => setTypedCode(typedCode)}
          onFulfill={compareCode}
        />
        
        <TouchableOpacity 
          disabled={!shouldResend} 
          style={buttonStyle(shouldResend).style}
          onPress={() => {
            setSecondsToResend(20);
            setShouldResend(false);
          }}
          >
          <Text style={styles.buttonLabel}>
            {"Reenviar"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.bottomMessage}>
        {"Não chegou? Re-envie o código"}
        {!shouldResend && 
          <>
            {" em "}
            <Text style={styles.bold}>
              {secondsToResend + "s"}
            </Text>
          </>
        }
        {"."}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  back: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#cdcdcd",
    borderRadius: 15,
    width: 50,
    text: {
      fontSize: 18
    }
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 45,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  topPartView: { 
    width: "100%"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: "20%",
  },
  messageView: {
    marginBottom: "10%",
  },
  message: {
    color: "#333"
  },
  bold: {
    fontWeight: "800", 
    color: "#000"
  },
  codeCell: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
  },
  codeCellFocused: {
    borderColor: "black"
  },
  codeText: {
    color: "black",
    fontSize: 25
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
  },
  bottomMessage: {
    alignSelf: "center", 
    flexDirection: "row"
  }
});

const buttonStyle = (condition) => StyleSheet.create({
  style: {
    backgroundColor: condition ? "#212226" : "#aaa", 
    width: "100%", 
    alignItems: "center", 
    borderRadius: 12, 
    padding: 15, 
    marginTop: 80
  }
});