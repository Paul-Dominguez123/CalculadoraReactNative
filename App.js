import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './src/views/CalculatorScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <CalculatorScreen/>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaf6',
    //paddingTop:Platform.OS ==="android" && 35,  
  },
  platform:{
  },
});
