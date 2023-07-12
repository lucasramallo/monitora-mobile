import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function HorarioItem (props) {
  const {workload, date} = props.item;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", gap: 20, alignItems: "center"}}>
        <BouncyCheckbox onPress={(isChecked) => 0} size={20} fillColor="#000"/>
        <Text>{workload}</Text>
      </View>
      <Text>{date}</Text>
      <TouchableOpacity  style={{marginHorizontal: 20}} onPress={() => 0} >
        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
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
  }
});