import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { primaryColor, secondaryColor} from '../../assets/colors/index'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileButton({ text, AntDesignIcon }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContent}>
        <AntDesign name={AntDesignIcon} size={24} color="black" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
    padding: 10,
    marginTop: 16,
    shadowColor: "#000",
    shadowColor: "#D7D7D7",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: primaryColor,
    marginLeft: 10,
  },
});
