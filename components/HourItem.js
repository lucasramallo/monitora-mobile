import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function HorarioItem (props) {
  const { item, onEditPress } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.checkAndWorkloadView}>
        <BouncyCheckbox 
          onPress={(isChecked) => 0} 
          size={20} 
          fillColor="#000"
        />
        <Text>
          {item.workload}
        </Text>
      </View>
      
      <Text>
        {item.date}
      </Text>
      
      <TouchableOpacity 
        style={styles.editButton} 
        onPress={onEditPress} 
      >
        <MaterialCommunityIcons 
          name="pencil-outline" 
          size={24} 
          color="black" 
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
    alignItems: "center"
  },
  editButton: {
    marginHorizontal: 20
  }
});