import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Switch, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList, Alert } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo, Ionicons, Octicons,  } from '@expo/vector-icons';
import HorarioItem from '../../../components/HourItem';
import { Modalize } from 'react-native-modalize';
import BottomSheet from '../../../components/BottomSheet';
import { primaryColor } from '../../../assets/colors';

export default function Hours() {
  const userImageURL = "https://github.com/lucasramallo/lucasramallo/assets/108425719/f846922d-276a-47c0-8994-d7e0d9251e6c";
  const userName = "João Lucas";
  const subject = "PDM";
  const correntMonth = "Julho";
  const thereIsPreviousMonth = true;
  const thereIsLaterMonth = false;
  const [hoursList, setHoursList] = useState([
    { 
      id: 57,
      workload: "07:00/08:00", 
      date: "01/07/2023",
      description: "1, teste e teste",
      remote: false
    },
    { 
      id: 81,
      workload: "07:00/08:30", 
      date: "05/07/2023",
      description: "2, teste e teste",
      remote: true
    },
    { 
      id: 123,
      workload: "07:00/12:00", 
      date: "14/07/2023",
      description: "3, teste e teste",
      remote: false
    },]);
  const navigation = useNavigation();
  const modalizeRef = useRef(null);
  const [hourItemToEditObject, setHourItemToEditObject] = useState(null);
  
  const handleAddHourItem = (item) => {
    modalizeRef.current?.close();
    if(hoursList.find(hourItem => hourItem.id == item.id)){
      const hoursListCopy = [...hoursList];
      const itemIndex = hoursListCopy.findIndex(obj => obj.id == item.id);
      hoursListCopy.splice(itemIndex, 1, item);
      setHoursList(hoursListCopy);
    } else {
      setHoursList([...hoursList, item]);
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.userImage} 
          source={{uri: userImageURL}} 
        />
        
        <View style={styles.userInfoView}>
          <Text style={styles.userName}>
            {userName}
          </Text>
          <Text style={styles.userSubject}>
            {"Monitor " + subject}
          </Text>
        </View>
      </View>
      
      <Text style={styles.title}>
        {"Meus Horários"}
      </Text>
      
      <Text style={styles.monthTitle}>
        {"Mês de " + correntMonth}
      </Text>
      
      <View style={styles.topButtonsView}>
        <View style={styles.topButtonsViewLeft}>
          <TouchableOpacity style={styles.topButtons}>
            <FontAwesome 
              name="sliders" 
              size={16} 
              color="#727272" 
            />
            <Text style={styles.topButtonsLeftLabels}>
              {"Filtros"}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.topButtons}>
            <FontAwesome 
              name="sliders" 
              size={16} 
              color="#727272" 
            />
            <Text style={styles.topButtonsLeftLabels}>
              {"Delete"}
            </Text>
          </TouchableOpacity>
        </View>
        
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
        <TouchableOpacity style={styles.filterButtons}>
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
        
        <TouchableOpacity style={styles.filterButtons}>
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
        
        <View style={styles.buttonBackForwardView}>
          <TouchableOpacity 
            disabled={!thereIsPreviousMonth}
            style={
              thereIsPreviousMonth ? styles.pageButtonActive : styles.pageButtonDisabled
            }
          >
            <Ionicons 
              name="chevron-back" 
              size={16} 
              color="#222"
            />
          </TouchableOpacity>
          <TouchableOpacity 
            disabled={!thereIsLaterMonth}
            style={
              thereIsLaterMonth ? styles.pageButtonActive : styles.pageButtonDisabled
            }
          >
            <Ionicons 
              name="chevron-forward" 
              size={16} 
              color="#222" 
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <View>
        <FlatList 
          data={hoursList}
          renderItem={({item}) => (
            <HorarioItem item={item} onEditPress={() => {
                setHourItemToEditObject(item);
                modalizeRef.current?.open();
              }
            }/>)
          }
        />
      </View>
      
      <Modalize 
        ref={modalizeRef}
        adjustToContentHeight={true}
      >
        <BottomSheet 
          hourItemToEditObject={hourItemToEditObject}
          onConfirm={newItem => handleAddHourItem(newItem)}
        />
      </Modalize>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+25,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 100
  },
  userInfoView: {
    justifyContent: "space-between"
  },
  userName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18
  },
  userSubject: {
    color: "#949BA5", 
    fontSize: 15,
    fontFamily: 'Inter_400Regular'
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
  topButtonsViewLeft: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 8,
    gap: 10
  },
  topButtonsLeftLabels: {
    fontSize: 14, 
    color: "#727272"
  },
  topButtons: {
    borderWidth: 1,
    borderColor: "#949BA5",
    padding: 8,
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
    marginLeft: 70
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
  buttonBackForwardView: {
    flexDirection: "row",
    gap: 5
  },
  pageButtonActive: {
    borderRadius: 50,  
    width: 25, 
    height: 25, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#F5F7F9"
  },
  pageButtonDisabled: {
    borderRadius: 50,  
    width: 25, 
    height: 25, 
    alignItems: "center", 
    justifyContent: "center",
  },
});