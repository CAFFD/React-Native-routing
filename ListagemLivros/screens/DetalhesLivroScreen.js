import React from 'react';
import { View, Text, StyleSheet, Button, Image, SafeAreaView } from 'react-native';

const DetalhesLivroScreen = ({ route, navigation }) => {
  const { livro } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>{livro.titulo}</Text>
        <Text style={styles.autor}>{livro.autor}</Text>
        <Image 
          source={{ uri: livro.imagem }} 
          style={styles.imagem} 
        />
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#6200ee"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  autor: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 150,
    height: 220,
    borderRadius: 8,
    marginBottom: 30,
    backgroundColor: '#e0e0e0', // Cor de fundo caso a imagem demore a carregar
  },
});

export default DetalhesLivroScreen;