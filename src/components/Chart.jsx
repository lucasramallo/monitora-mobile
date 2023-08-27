import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import { paddingContainer } from '../../assets/constants';

export default function Chart(){
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>24 de Junho</Text>
        <BarChart
          data={{
            labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
            datasets: [
              {
                data: [
                  1,
                  2,
                  5,
                  3,
                  1,
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width - paddingContainer - 20} // from react-native
          height={220}
          yAxisSuffix="hrs"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#F6F8FC",
            backgroundGradientFrom: "#F6F8FC",
            backgroundGradientTo: "#F6F8FC",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `#77838F`,
            labelColor: (opacity = 1) => `#77838F`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "F6F8FC"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#77838F',
  }
});
