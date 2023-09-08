import { View, Text, StyleSheet } from 'react-native';
import { primaryColor, secondaryColor, warnColor } from '../../assets/colors/index'

export default function WorkloadDisplay({ workload }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carga Horária</Text>
      <View style={styles.timeDisplay}>
        <View style={styles.timer}>
          <Text style={styles.time}>{`${parseInt(workload/60)}h${workload%60}m`}</Text>
        </View>
        <Text style={{fontFamily: 'Inter_400Regular', fontSize: 16, color: '#949BA5', marginTop: 2}}>Esta semana</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34
  },
  title: {
    fontFamily: 'Inter_500Medium',
    color: primaryColor,
    fontSize: 17
  },
  timeDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8FC',
    width: '100%',
    height: 95,
    borderRadius: 14,
    marginTop: 16,
  },
  timer: {
    flexDirection: 'row',
  },
  time: {
    fontFamily: 'Inter_700Bold',
    fontSize: 26,
    color: primaryColor
  },
})