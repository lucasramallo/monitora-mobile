import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Switch, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList, Alert } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo, Ionicons, Octicons, MaterialIcons } from '@expo/vector-icons';
import HorarioItem from '../../components/HourItem';
import { Modalize } from 'react-native-modalize';
import BottomSheet from '../../components/BottomSheet';
import { primaryColor } from '../../../assets/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkload, setweekWorkloadList } from '../../redux/workload/slice';
import Header from '../../components/Header.jsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Hours() {
  const [currentMonth, setCurrentMonth] = useState("Julho");
  const thereIsPreviousMonth = true;
  const thereIsLaterMonth = false;
  const [hoursList, setHoursList] = useState([
    { 
      id: 57,
      workload: "07:00/08:00", 
      date: new Date(2023, 8, 5),
      description: "1, teste e teste",
      remote: false
    },
    { 
      id: 81,
      workload: "07:00/08:30", 
      date: new Date(2023, 8, 6),
      description: "2, teste e teste",
      remote: true
    },
    { 
      id: 123,
      workload: "07:00/12:00", 
      date: new Date(2023, 8, 7),
      description: "3, teste e teste",
      remote: false
    },]);
    
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { workloadList, weekWorkloadList } = useSelector((state) => state.workloadReducer);
  const modalizeRef = useRef(null);
  const [hourItemToEditObject, setHourItemToEditObject] = useState(null);
  
  const inThisWeek = (givenDate) => {
    let date = new Date();
    let sunday = new Date(date.setDate(date.getDate() - date.getDay()));
    let saturday = new Date(date.setDate(date.getDate() + 6));
    
    return (givenDate > sunday && givenDate < saturday);
  }
  
  const calcInterval = (string) => {
    let [initial, final] = string.split("/");
    let [hi, mi] = initial.split(':').map(n => parseInt(n));
    let [hf, mf] = final.split(':').map(n => parseInt(n));
    let initialMinutes = hi*60 + mi;
    let finalMinutes = hf*60 + mf;
    
    return finalMinutes - initialMinutes;
  }
    
  useEffect(() => {
    let thisWeekDays = hoursList.filter(item => inThisWeek(item.date));
    let weekWorkloadListCopy = weekWorkloadList.map((el, weekDay) => {
      for(let item of thisWeekDays){
        if(item.date.getDay()-1 == weekDay){
          return calcInterval(item.workload);
        }
      }
      
      return 0;
    });
    dispatch(setweekWorkloadList(weekWorkloadListCopy));
    
    let workloadList = hoursList.map(item => calcInterval(item.workload));
    dispatch(addWorkload(workloadList))
  }, [hoursList]);
  
  
  const handleAddHourItem = (item) => {
    modalizeRef.current?.close();
    let existingIndex = hoursList.findIndex(hourItem => hourItem.id == item.id);
    if(existingIndex != -1){
      const hoursListCopy = [...hoursList];
      hoursListCopy.splice(existingIndex, 1, item);
      setHoursList(hoursListCopy);
    } else {
      setHoursList([...hoursList, item]);
    }
  };
  
  
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>

        <Header />
        
        <Text style={styles.title}>
          {"Meus Horários"}
        </Text>
        
        <Text style={styles.monthTitle}>
          {"Mês de " + currentMonth}
        </Text>
        
        <View style={styles.topButtonsView}>
          <TouchableOpacity style={styles.sendHoursButton}>
            <MaterialIcons 
              name="arrow-circle-up" 
              size={20} 
              color={primaryColor} 
            />
            <Text style={styles.sendHoursButtonLabel}>
              {"Enviar"}
            </Text>
          </TouchableOpacity>
            
          
          <TouchableOpacity 
            style={styles.addHourItemButton}
            onPress={() => {
                setHourItemToEditObject(null);
                modalizeRef.current?.open();
              }
            }>
            <Entypo 
              name="plus" 
              size={20} 
              color="#fff"
            />
            <Text style={styles.addHourItemButtonLabel}>
              {"Adicionar"}
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.filtersView}>
          <TouchableOpacity 
            style={styles.filterButtons}
            onPress={() => setHoursList([...hoursList].sort((item1, item2) => calcInterval(item2.workload) - calcInterval(item1.workload)))}>
            <Text style={styles.filterButtonsLabels}>
              {"Carga"}
            </Text>
            <Octicons 
              name="arrow-switch" 
              size={24} 
              color="#949BA5" 
              transform={[
                { rotate: '90deg' }, 
                { scale: 0.8 }
              ]}
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.filterButtons}
            onPress={() => setHoursList([...hoursList].sort((item1, item2) => item2.date - item1.date))}>
            <Text style={styles.filterButtonsLabels}>
              {"Data"}
            </Text>
            <Octicons 
              name="arrow-switch" 
              size={24} 
              color="#949BA5" 
              transform={[
                { rotate: '90deg' }, 
                { scale: 0.8 }
              ]}
            />
          </TouchableOpacity>
        </View>
        
        <View>
          <FlatList 
            data={hoursList}
            renderItem={({item}) => (
              <HorarioItem item={item} onEditPress={() => {
                  setHourItemToEditObject(item);
                  modalizeRef.current?.open();
                }}
                onDeletePress={() => {
                  setHoursList(hoursList.filter(hour => hour != item));
                }}
              />)
            }
          />
        </View>
        
        <Modalize 
          ref={modalizeRef}
          adjustToContentHeight={true}
        >
          
          <BottomSheet 
            hourItemToEditObject={hourItemToEditObject}
            datesList={hoursList.map(item => item.date.toLocaleDateString())}
            onConfirm={newItem => handleAddHourItem(newItem)}
          />
          
        </Modalize>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+25,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  title: {
    color: primaryColor,
    fontSize: 26,
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'Inter_700Bold'
  },
  monthTitle: {
    color: "#949BA5",
    fontSize: 16,
    fontFamily: 'Inter_500Medium'
  },
  topButtonsView: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between"
  },
  sendHoursButtonLabel: {
    fontSize: 14, 
    color: primaryColor
  },
  sendHoursButton: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  addHourItemButton: {
    backgroundColor: primaryColor,
    flexDirection: "row",
    padding: 8,
    paddingRight: 14, //gambiarra
    borderRadius: 8,
    gap: 2,
    alignItems: "center",
  },
  addHourItemButtonLabel: {
    color: "#fff",
    fontSize: 14,
    fontFamily: 'Inter_400Regular'
  },
  filtersView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 15,
    marginRight: 120,
    gap: 30,
  },
  filterButtons: {
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5
  },
  filterButtonsLabels: {
    color: '#8C8C8C',
    fontSize: 14
  },
});