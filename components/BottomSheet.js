import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Switch, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { primaryColor } from '../assets/colors';

export default function BottomSheet(props) {
  const { onConfirm, hourItemToEditObject } = props;
  const newItem = {
    id: parseInt(Math.random()*128),
    description: "",
    date: "Date",
    workload: "Início/Final",
    remote: false
  };
  const itemObject = hourItemToEditObject != null ? hourItemToEditObject : newItem;
  const [isRemote, setIsRemote] = useState(itemObject.remote);
  const [description, setDescription] = useState(itemObject.description);
  const [date, setDate] = useState(itemObject.date);
  const [startTime, setStartTime] = useState(itemObject.workload.split("/")[0]);
  const [endTime, setEndTime] = useState(itemObject.workload.split("/")[1]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setStartTimePicker] = useState(false);
  const [showEndTimePicker, setEndTimePicker] = useState(false);
  
  const handleConfirm = () => {
    const workload = startTime + "/" + endTime;
    const id = itemObject.id;
    onConfirm({
      id,
      description, 
      workload, 
      date,
      remote: isRemote
    });
  }
  
  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        {hourItemToEditObject ? "Editar Horário" : "Novo Horário"}
      </Text>
      <View style={styles.inputsView}>
        <TextInput 
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
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
            setDate(chosenDate.toLocaleDateString());
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
            setStartTime(chosenStartTime.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" }));
            setStartTimePicker(false);
          }}
          onCancel={() => setStartTimePicker(false)}
        />
        
        <DateTimePickerModal
          isVisible={showEndTimePicker}
          mode="time"
          onConfirm={(chosenEndTime) => {
            setEndTime(chosenEndTime.toLocaleTimeString([], {
                hour12: false, 
                hour: "2-digit", 
                minute: "2-digit"
            }));
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
              false:"#CED3DE"
            }}
            thumbColor={
              isRemote ? "#000" : "#A6ABB5"
            }
            value={isRemote}
            onValueChange={() => setIsRemote(!isRemote)}
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