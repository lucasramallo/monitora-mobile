import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { primaryColor } from '../../assets/colors';

export default function HorarioItem ({ item, onEditPress }) {
  
  return (
    <View style={styles.container}>
      <View style={styles.checkAndWorkloadView}>
        <BouncyCheckbox 
          onPress={(isChecked) => 0} 
          size={20} 
          fillColor={primaryColor}
        />
        <Text style={{fontSize: 15, color: '#404040', fontFamily: 'Inter_400Regular'}}>
          {item.workload}
        </Text>
      </View>
      
      <Text style={{fontSize: 15, color: '#404040', fontFamily: 'Inter_400Regular'}}>
        {item.date}
      </Text>
      
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
  editButton: {

  }
});