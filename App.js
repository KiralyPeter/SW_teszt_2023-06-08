import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

// import { Button } from 'react-native-web';

export default function App() {

  const [count, setCounter] = useState(0);

  function increment(){
    // alert(count+1)
    let sum = count+1;
    setCounter(sum);    
  }

  function decrement(){
    // alert(count+1)
    let sum = count-1;
    setCounter(sum);    
  }

  function reset(){
    // alert(count+1)    
    setCounter(0);    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgalom</Text>
      <Text style={styles.title}>Számláló</Text>
      <Text style = {styles.count}>{count}</Text>

      <Button title="Increase"
      onPress={increment}/>

      <Button title="Decrease"
      onPress={decrement}/>

      <Button title="Reset"
      onPress={reset}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  count: {
    fontSize: 54,
    color: 'yellow',
  },
});
