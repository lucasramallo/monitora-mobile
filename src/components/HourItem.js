import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { primaryColor } from '../../assets/colors';

export default function HorarioItem ({ item, onEditPress, onDeletePress }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.checkAndWorkloadView}>
        <Text style={{fontSize: 15, color: '#404040', fontFamily: 'Inter_400Regular'}}>
          {item.workload}
        </Text>
      </View>
      
      <Text style={{fontSize: 15, color: '#404040', fontFamily: 'Inter_400Regular'}}>
        {item.date}
      </Text>
      
      <View style={styles.actionButtonsView}>
      <TouchableOpacity 
        style={styles.editButton} 
        onPress={onEditPress} 
      >
        <MaterialCommunityIcons 
          name="pencil-outline" 
          size={24} 
          color="#565656" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDeletePress}>
        <MaterialCommunityIcons 
          name="delete-outline" 
          size={24} 
          color="#565656" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center"
  },
  checkAndWorkloadView: {
    flexDirection: "row", 
    gap: 20, 
    alignItems: "center",
  },
  actionButtonsView: {
    flexDirection: "row", 
    gap: 20, 
    alignItems: "center",
  },
  editButton: {

  }
});