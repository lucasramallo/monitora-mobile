import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Switch, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function BottomSheet({ onConfirm, hourItemToEditObject }) {
  const newItem = {
    id: parseInt(Math.random()*128),
    description: "",
    date: "Date",
    workload: "Início/Final",
    remote: false
  };
  const [itemObject, setItemObject] = useState(hourItemToEditObject || newItem);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setStartTimePicker] = useState(false);
  const [showEndTimePicker, setEndTimePicker] = useState(false);
  const { id, description, date, workload, remote } = itemObject;
  const [startTime, endTime] = workload.split("/");
  
  const handleChange = (prop, value) => {
    setItemObject({
      ...itemObject,
      [prop]: value
    });
  };
  
  const handleConfirm = () => {
    onConfirm(itemObject);
  }
  
  const formatTime = time => time.toLocaleTimeString([], { 
    hour12: false, 
    hour: "2-digit", 
    minute: "2-digit" 
  });
  
  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {hourItemToEditObject ? "Editar Horário" : "Novo Horário"}
      </Text>
      <View style={styles.inputsView}>
        <TextInput 
          multiline={true}
          value={description}
          onChangeText={text => handleChange("description", text)}
          numberOfLines={4}
          selectionColor="#000"
          placeholder="Descrição..."
          style={[
            styles.inputs, 
            styles.descriptionInput
          ]}
        />
          
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={(chosenDate) => {
            handleChange("date", chosenDate.toLocaleDateString());
            setShowDatePicker(false);
          }}
          onCancel={() => setShowDatePicker(false)}
        />
              
        <TouchableOpacity 
          style={[
            styles.inputs, 
            styles.topInputs
          ]}
          onPress={() => setShowDatePicker(true)}
          >
          <Text style={date == "Date" ? styles.placeholderText : {}}>
            {date}
          </Text>
          <Feather 
            name="calendar" 
            size={24} 
            color="#949BA5" 
          />
        </TouchableOpacity>
        
        <DateTimePickerModal
          isVisible={showStartTimePicker}
          mode="time"
          onConfirm={(chosenStartTime) => {
            handleChange("workload", formatTime(chosenStartTime) + "/" + endTime);
            setStartTimePicker(false);
          }}
          onCancel={() => setStartTimePicker(false)}
        />
        
        <DateTimePickerModal
          isVisible={showEndTimePicker}
          mode="time"
          onConfirm={(chosenEndTime) => {
            handleChange("workload", startTime + "/" + formatTime(chosenEndTime));
            setEndTimePicker(false);
          }}
          onCancel={() => setEndTimePicker(false)}
        />
        
        <View style={styles.timeInputsView}>
          <TouchableOpacity 
            style={[
              styles.inputs, 
              styles.timeInputs
            ]}
            onPress={() => setStartTimePicker(true)}
            >
            <Text style={startTime == "Início" ? styles.placeholderText: {}}>
              {startTime}
            </Text>
            <Feather 
              name="clock" 
              size={24} 
              color="#949BA5" 
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.inputs, 
              styles.timeInputs
            ]}
            onPress={() => setEndTimePicker(true)}
            >
            <Text style={endTime == "Final" ? styles.placeholderText: {}}>
              {endTime}
            </Text>
            <Feather 
              name="clock" 
              size={24} 
              color="#949BA5" 
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.switchView}>
          <Text>
            {"Atividade Remota"}
          </Text>
          <Switch 
            trackColor={{
              true: "#686868", 
              false:"#949BA5"
            }}
            thumbColor={
              remote ? "#000" : "#565e6a"
            }
            value={remote}
            onValueChange={() => handleChange("remote", !remote)}
          />
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleConfirm}
      >
        <Text style={styles.button.label}>
          {"Adicionar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    padding: 15
  },
  title: {
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 18,
  },
  inputsView: {
    gap: 10
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#949BA5",
    borderRadius: 12,
    textAlignVertical: "top",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholderText: {
     color: "#949BA5"
  },
  timeInputsView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  timeInputs: {
    width: "48%"
  },
  topInputs: {
    width: "100%",
  },
  switchView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
    label: {
      color: "#fff"
    }
  }
});