import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Switch, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList, Alert } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo, Ionicons, Octicons,  } from '@expo/vector-icons';
import HorarioItem from '../../../components/HourItem';
import { Modalize } from 'react-native-modalize';
import BottomSheet from '../../../components/BottomSheet';

export default function Hours() {
  const userImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwWf4v8y-sHDj4CzyJ07YQa6DlV4T1QyBvA&usqp=CAU";
  const userName = "João Lucas";
  const subject = "PDM";
  const month = "Julho";
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
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.userImage} source={{uri: userImageURL}} />
        <View style={{justifyContent: "space-between"}}>
          <Text style={{fontWeight: "bold"}}>{userName}</Text>
          <Text style={{color: "#949BA5", fontSize: 12,}}>Monitor {subject}</Text>
        </View>
      </View>
      
      <Text style={styles.title}>Meus Horários</Text>
      <Text style={{color: "#949BA5"}}>Mês de {month}</Text>
      
      <View style={styles.topButtonsView}>
        <View style={styles.topButtonsViewLeft}>
          <TouchableOpacity style={styles.topButtons}>
            <FontAwesome name="sliders" size={16} color="#949BA5" />
            <Text style={{fontSize: 12, color: "#949BA5"}}>Filtros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topButtons}>
            <FontAwesome name="sliders" size={16} color="#949BA5" />
            <Text style={{fontSize: 12, color: "#949BA5"}}>Delete</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.addHourItemButton}
          onPress={() => {
              setHourItemToEditObject(null);
              modalizeRef.current?.open();
            }
          }>
          <Entypo name="plus" size={20} color="#fff"/>
          <Text style={{color: "#fff"}}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.filtersView}>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 5}}>
          <Text style={{color: "#949BA5"}}>Carga</Text>
          <Octicons name="arrow-switch" size={24} color="#949BA5" transform={[{ rotate: '90deg' }, { scale: 0.8 }]}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 5}}>
          <Text style={{color: "#949BA5"}}>Data</Text>
          <Octicons name="arrow-switch" size={24} color="#949BA5" transform={[{ rotate: '90deg' }, { scale: 0.8 }]}/>
        </TouchableOpacity>
        <View style={{flexDirection: "row", gap: 5}}>
          <TouchableOpacity disabled={!thereIsPreviousMonth} style={thereIsPreviousMonth && styles.pageButtonActive || styles.pageButtonDisabled}>
            <Ionicons name="chevron-back" size={16} color="#222"/>
          </TouchableOpacity>
          <TouchableOpacity disabled={!thereIsLaterMonth} style={thereIsLaterMonth && styles.pageButtonActive || styles.pageButtonDisabled}>
            <Ionicons name="chevron-forward" size={16} color="#222" />
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
          } />)
          }
        />
      </View>
      
      <Modalize ref={modalizeRef} adjustToContentHeight={true}>
        <BottomSheet hourItemToEditObject={hourItemToEditObject} onConfirm={() => modalizeRef.current?.close()}/>
      </Modalize>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+20,
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20
  },
  topButtonsView: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between"
  },
  topButtonsViewLeft: {
    flexDirection: "row",
    marginVertical: 15,
    gap: 10
  },
  topButtons: {
    borderWidth: 1,
    borderColor: "#949BA5",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  addHourItemButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    gap: 5,
    alignItems: "center"
  },
  filtersView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 70
  },
  pageButtonActive: {
    borderRadius: 50,  
    width: 25, 
    height: 25, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#949BA5"
  },
  pageButtonDisabled: {
    borderRadius: 50,  
    width: 25, 
    height: 25, 
    alignItems: "center", 
    justifyContent: "center",
  },
});