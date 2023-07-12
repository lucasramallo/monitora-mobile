import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo, Ionicons, Octicons,  } from '@expo/vector-icons';
import HorarioItem from '../../../components/HourItem';

export default function Horarios() {
  const userImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwWf4v8y-sHDj4CzyJ07YQa6DlV4T1QyBvA&usqp=CAU";
  const userName = "João Lucas";
  const subject = "PDM";
  const month = "Julho";
  const thereIsPreviousMonth = true;
  const thereIsLaterMonth = false;
  const [hoursList, setHoursList] = useState([
    { 
      workload: "07:00/08:00", 
      date: "01/07/2023"
    },
    { 
      workload: "07:00/08:30", 
      date: "05/07/2023"
    },
    { 
      workload: "07:00/12:00", 
      date: "14/07/2023"
    },]);
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgPerfil} source={{uri: userImageURL}} />
        <View style={{justifyContent: "space-between"}}>
          <Text style={{fontWeight: "bold"}}>{userName}</Text>
          <Text style={{color: "#949BA5", fontSize: 12,}}>Monitor {subject}</Text>
        </View>
      </View>
      <Text style={styles.titulo}>Meus Horários</Text>
      <Text style={{color: "#949BA5"}}>Mês de {month}</Text>
      <View style={styles.viewBotoesSuperiores}>
        <View style={styles.viewBotoesSuperioresEsquerda}>
          <TouchableOpacity style={styles.botoesSuperiores}>
            <FontAwesome name="sliders" size={16} color="#949BA5" />
            <Text style={{fontSize: 12, color: "#949BA5"}}>Filtros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesSuperiores}>
            <FontAwesome name="sliders" size={16} color="#949BA5" />
            <Text style={{fontSize: 12, color: "#949BA5"}}>Delete</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.botaoAdicionar}>
          <Entypo name="plus" size={20} color="#fff"/>
          <Text style={{color: "#fff"}}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.filtrosView}>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 5}}>
          <Text style={{color: "#949BA5"}}>Carga</Text>
          <Octicons name="arrow-switch" size={24} color="#949BA5" transform={[{ rotate: '90deg' }, { scale: 0.8 }]}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 5}}>
          <Text style={{color: "#949BA5"}}>Data</Text>
          <Octicons name="arrow-switch" size={24} color="#949BA5" transform={[{ rotate: '90deg' }, { scale: 0.8 }]}/>
        </TouchableOpacity>
        <View style={{flexDirection: "row", gap: 5}}>
          <TouchableOpacity disabled={!thereIsPreviousMonth} style={thereIsPreviousMonth && styles.botaoPaginaAtivado || styles.botaoPaginaDesativado}>
            <Ionicons name="chevron-back" size={16} color="#222"/>
          </TouchableOpacity>
          <TouchableOpacity disabled={!thereIsLaterMonth} style={thereIsLaterMonth && styles.botaoPaginaAtivado || styles.botaoPaginaDesativado}>
            <Ionicons name="chevron-forward" size={16} color="#222" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View>
        <FlatList 
          data={hoursList}
          renderItem={({item}) => (
          <HorarioItem item={item}/>)
          }
        />
      </View>
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
  imgPerfil: {
    width: 45,
    height: 45,
    borderRadius: 100
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 20
  },
  viewBotoesSuperiores: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "space-between"
  },
  viewBotoesSuperioresEsquerda: {
    flexDirection: "row",
    marginVertical: 15,
    gap: 10
  },
  botoesSuperiores: {
    borderWidth: 1,
    borderColor: "#949BA5",
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  botaoAdicionar: {
    backgroundColor: "#000",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    gap: 5,
    alignItems: "center"
  },
  filtrosView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 70
  },
  botaoPaginaAtivado: {
    borderRadius: 50,  
    width: 25, 
    height: 25, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#949BA5"
  },
  botaoPaginaDesativado: {
    borderRadius: 50,  
    width: 25, 
    height: 25, 
    alignItems: "center", 
    justifyContent: "center",
  }
});