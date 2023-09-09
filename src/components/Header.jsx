import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import defaultProfileImage from '../../assets/img/default-profile-image.png';

export default function Header() {
  const [userImageURL, setUserImageURL] = useState("https://github.com/lucasramallo/lucasramallo/assets/108425719/f846922d-276a-47c0-8994-d7e0d9251e6c");
  const [userName, setUserName] = useState("João Lucas");
  const [subject, setSubject] = useState("PDM");

  const { profilePicture } = useSelector((state) => state.userReducer);
  console.log(profilePicture)
  return (
    <View style={styles.header}>
      {profilePicture ? <Image
        style={styles.userImage}
        source={{ uri: profilePicture }}
      /> : <Image source={defaultProfileImage} style={styles.userImage} />}
      
      <View style={styles.userInfoView}>
        <Text style={styles.userName}>
          {userName}
        </Text>
        <Text style={styles.userSubject}>
          {"Monitor " + subject}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  userInfoView: {
    justifyContent: "space-between",
  },
  userName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
  },
  userSubject: {
    color: "#949BA5",
    fontSize: 15,
    fontFamily: 'Inter_400Regular',
  },
});
