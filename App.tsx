import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
º
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo desde app usuarios</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
  },
});
