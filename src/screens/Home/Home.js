import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Constants from 'expo-constants';
import AvatarImage from '../../../assets/img/Avatar-icon.png'
import { primaryColor, secondaryColor} from '../../../assets/colors/index'
import WorkloadDisplay from '../../components/WorkloadDisplay';
import ProgressBarView from '../../components/ProgressBar';

export default function HomeScreen() {
  const { currentUser } = useSelector((state) => state.userReducer); // Pega as informações do usuário corrente no estado global
  
  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <View style={styles.myHoursButtonContainer}>
        <TouchableOpacity style={styles.myHoursButton}>
          <Text style={styles.myHoursButtonText}>Meus Horários</Text>
          <View style={styles.AvatarImageBorder}>
            <Image
              style={styles.AvatarImage}
              source={AvatarImage}
            />
          </View>
        </TouchableOpacity>
      </View>

      <WorkloadDisplay />
      <ProgressBarView />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight+25,
    paddingHorizontal: 20,
  },
  myHoursButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  myHoursButton: {
    width: '100%',
    height: 90,
    backgroundColor: '#212226',
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18
  },
  AvatarImageBorder: {
    width: 48,
    height: 48,
    backgroundColor: '#656669',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  AvatarImage: {
    width: 32,
    height: 32,
    borderRadius: 15
  },
  myHoursButtonText: {
    color: secondaryColor,
    fontFamily: 'Inter_700Bold',
    fontSize: 16
  }
})