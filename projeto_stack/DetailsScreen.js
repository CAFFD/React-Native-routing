import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DatailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏣 Tela de Detalhes</Text>
      <Text>ID do Produto: {produtoId}</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});