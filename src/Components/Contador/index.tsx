import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

const Contador = () => {
    const [number, setNumber] = useState(0);
  return (
      <View style={styles.container}>
          <Text>Contador</Text>
          <TouchableOpacity onPress={() => setNumber(number + 1)}>
              <Text>Incrementar</Text>
          </TouchableOpacity>
          <Text>{number}</Text>
          <TouchableOpacity onPress={() => setNumber(number - 1)}>
              <Text>Decrementar</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
      </View>
  )
}

export default Contador;