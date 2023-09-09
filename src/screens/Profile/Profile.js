import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import defaultProfileImage from '../../../assets/img/default-profile-image.png';
import Constants from 'expo-constants';
import Background from '../../../assets/img/BackgroundProfile.png';
import ProfileButton from '../../components/ProfileButton';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePicture } from '../../redux/user/slice';
import { primaryColor, secondaryColor} from '../../../assets/colors/index'

export default function Profile({ navigation }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  const { profilePicture } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setProfilePicture(result.assets[0].uri));
    }
  };

  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons 
            name="chevron-back" 
            size={18} 
            color="black"
          />
        </TouchableOpacity>

        <Text style={styles.headerText} >Perfil</Text>

        <TouchableOpacity 
          onPress={() => {}}
          style={styles.settingsButton}
        >
          <SimpleLineIcons name="options-vertical" size={16} color="black"/>
        </TouchableOpacity>
      </View>
      
      <View>
        <View style={styles.pickImageContainer}>
          {profilePicture ? <Image source={{ uri: profilePicture }} style={styles.image} /> : <Image source={defaultProfileImage} style={styles.image} />}
          <TouchableOpacity onPress={pickImage} style={styles.buttonPick}>
            <AntDesign name="adduser" size={24} color="black" />
            {profilePicture ? <Text style={styles.buttonPickText}>Editar foto</Text> : <Text style={styles.buttonPickText}>Adicionar</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Text style={styles.infoText}>Informações</Text>
        <ProfileButton text={"João Lucas"} AntDesignIcon={"user"}/>
        <ProfileButton text={"PDM"} AntDesignIcon={"book"}/>
        <ProfileButton text={"202030600020"} AntDesignIcon={"idcard"}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    justifyContent: 'space-between',
    width: '100%', 
  },
  back: {
    padding: 15,
    width: 50,
    text: {
      fontSize: 18
    }
  },
  headerText: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
  },
  settingsButton: {
    padding: 15,
    width: 50,
    text: {
      fontSize: 18
    }
  },
  pickImageContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  image: {
    borderRadius: 100,
    width: 132, 
    height: 132
  },
  buttonPick: {
    height: 52,
    width: 156,
    flexDirection: 'row',
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 18,
    shadowColor: 'rgba(33, 34, 38, 0.4)',
    shadowOpacity: 5,
    shadowRadius: 32,
    elevation: 10,
  },
  buttonPickText: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    marginLeft: 8
  },
  infoText: {
    fontFamily: "Inter_500Medium",
    fontSize: 17,
    color: primaryColor,
    marginTop: 30,
  }
})
