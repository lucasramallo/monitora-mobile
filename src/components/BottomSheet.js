import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Switch, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { primaryColor } from '../../assets/colors';


export default function BottomSheet({ onConfirm, hourItemToEditObject }) {
  const newItem = {
    id: parseInt(Math.random()*128),
    description: "",
    date: "Data",
    workload: "Início/Final",
    remote: false
  };
  const [itemObject, setItemObject] = useState(hourItemToEditObject || newItem);
  const [warnDate, setWarnDate] = useState(null);
  const [warnStartTime, setWarnStartTime] = useState(null);
  const [warnEndTime, setWarnEndTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const { id, description, date, workload, remote } = itemObject;
  const [startTime, endTime] = workload.split("/");
  
  const handleChange = (prop, value) => {
    setWarnEndTime(null);
    setWarnStartTime(null);
    setWarnDate(null);
    
    setItemObject({
      ...itemObject,
      [prop]: value
    });
  };
  
  const handleConfirm = () => {
    if(itemObject.date != "Data" && startTime != "Início" && endTime != "Final" && parseInt(endTime.split(":").join("")) > parseInt(startTime.split(":").join(""))){
      onConfirm(itemObject);
    } else {
      if(itemObject.date == "Data"){
        setWarnDate(true);
      }
      if(startTime == "Início"){
        setWarnStartTime(true);
      }
      if(endTime == "Final" || parseInt(endTime.split(":").join("")) <= parseInt(startTime.split(":").join(""))){
        setWarnEndTime(true);
      }
    }
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
          selectionColor={primaryColor}
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
            handleChange("date", chosenDate);
            setShowDatePicker(false);
            setWarnStartTime(warnStartTime);
            setWarnEndTime(warnEndTime);
          }}
          onCancel={() => setShowDatePicker(false)}
        />
              
        <TouchableOpacity 
          style={[
            styles.inputs, 
            styles.topInputs,
            warnStyles(warnDate).input
          ]}
          onPress={() => {
            setShowDatePicker(true);
            setWarnDate(null);
          }}
          >
          <Text style={date == "Data" ? styles.placeholderText : {}}>
            {date == newItem.date ? newItem.date : date.toLocaleDateString("pt-BR")}
          </Text>
          <Feather 
            name="calendar" 
            size={24} 
            color={warnDate ? "#B66262" : "#949BA5"}
          />
        </TouchableOpacity>
        
        <DateTimePickerModal
          isVisible={showStartTimePicker}
          mode="time"
          onConfirm={(chosenStartTime) => {
            handleChange("workload", formatTime(chosenStartTime) + "/" + endTime);
            setShowStartTimePicker(false);
            setWarnDate(warnDate);
            setWarnEndTime(warnEndTime);
            setWarnStartTime(null);
          }}
          onCancel={() => {
            setShowStartTimePicker(false);
            setWarnDate(warnDate);
            setWarnEndTime(warnEndTime);
            setWarnStartTime(warnStartTime);
          }}
        />
        
        <DateTimePickerModal
          isVisible={showEndTimePicker}
          mode="time"
          onConfirm={(chosenEndTime) => {
            handleChange("workload", startTime + "/" + formatTime(chosenEndTime));
            setShowEndTimePicker(false);
            setWarnDate(warnDate);
            setWarnStartTime(warnStartTime);
            setWarnEndTime(null);
          }}
          onCancel={() => {
            setShowEndTimePicker(false);
            setWarnDateTime(warnDateTime);
            setWarnStartTime(warnStartTime);
            setWarnEndTime(warnEndTime);
          }}
        />
        
        <View style={styles.timeInputsView}>
          <TouchableOpacity 
            style={[
              styles.inputs, 
              styles.timeInputs,
              warnStyles(warnStartTime).input
            ]}
            onPress={() => {
              setShowStartTimePicker(true);
              setWarnStartTime(null);
            }}
            >
            <Text style={startTime == "Início" ? styles.placeholderText: {}}>
              {startTime}
            </Text>
            <Feather 
              name="clock" 
              size={24} 
              color={warnStartTime ? "#B66262" : "#949BA5"}
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.inputs, 
              styles.timeInputs,
              warnStyles(warnEndTime).input
            ]}
            onPress={() => {
              setShowEndTimePicker(true);
              setWarnEndTime(null);
            }}
            >
            <Text style={endTime == "Final" ? styles.placeholderText: {}}>
              {endTime}
            </Text>
            <Feather 
              name="clock" 
              size={24} 
              color={warnEndTime ? "#B66262" : "#949BA5"}
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
              false:"#CED3DE"
            }}
            thumbColor={
              remote ? "#000" : "#A6ABB5"
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
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    color: primaryColor,
    fontFamily: 'Inter_600SemiBold'
  },
  inputsView: {
    gap: 10
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#CDCDCD",
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
    backgroundColor: primaryColor,
    padding: 16,
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
    label: {
      color: "#fff",
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16
    }
  }
});

const warnStyles = warn => StyleSheet.create({
  input: {
    borderColor: warn ? "#B00000" : "#DCDCDC"
  },
  warn: {
    color: "#B00000"
  }
});