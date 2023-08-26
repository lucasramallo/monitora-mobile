import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { primaryColor, secondaryColor} from '../../assets/colors/index'
import { useState } from 'react';

export default function ProgressBarView() {

  const [progressValue, setProgressValue] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progresso da semana</Text>
      <ProgressBar progressBackgroundColor='#212226' progress={progressValue / 100} color={'#212226'} style={styles.progressBar} />
      <View style={styles.progressBarBottom}>
        <Text style={styles.progressBarBottomText}>{`${progressValue}%`}</Text>
        <Text style={styles.progressBarBottomText}>8h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
  progressBar: {
    height: 12, 
    borderRadius: 12,
    marginTop: 5,
    backgroundColor: '#E6EEF5'
  },
  title: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: primaryColor
  },
  progressBarBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBarBottomText: {
    fontFamily: 'Inter_400Regular',
    color: '#77838F',
    fontSize: 14,
    marginTop: 8
  }
})