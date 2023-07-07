import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function Home() {

  const { currentUser } = useSelector((state) => state.userReducer); // Pega as informações do usuário corrente no etado global

  return (
    <View style={styles.container}>
      <Text>Bem vindo! { currentUser }</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
})