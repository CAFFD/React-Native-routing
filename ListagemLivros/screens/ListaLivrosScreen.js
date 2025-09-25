import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, SafeAreaView } from 'react-native';

const LIVROS_DATA = [
  {
    id: '1',
    titulo: 'O Senhor dos Anéis', 
    autor: 'J.R.R. Tolkien', 
    imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
  },
  {
    id: '2',
    titulo: '1984', 
    autor: 'George Orwell', 
    imagem: 'https://cdn.kobo.com/book-images/fb0c52e7-c427-4eb3-b5aa-9aafc7efea43/1200/1200/False/AhIbw1TJuje1l6QPMtht5A.jpg',
  },
  {
    id: '3',
    titulo: 'O Pequeno Príncipe', 
    autor: 'Antoine de Saint-Exupéry', 
    imagem: 'https://harpercollins.com.br/cdn/shop/files/9786559801367_b81dda3d-fd75-4447-9bbe-b12029acc204.jpg?v=1737570989',
  },
  {
    id: '4',
    titulo: 'Dom Quixote', 
    autor: 'Miguel de Cervantes', 
    imagem: 'https://cdn.kobo.com/book-images/2de7cf3b-5a70-4e17-9a65-1af6fb5e919d/1200/1200/False/dom-quixote-8.jpg',
  },
];

const ListaLivrosScreen = ({ navigation }) => {
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.autor}>{item.autor}</Text>
      </View>
      <Button
        title="Ver Detalhes"
        onPress={() => {
          navigation.navigate('Detalhes', { livro: item });
        }}
        color="#6200ee"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={LIVROS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemTextContainer: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListaLivrosScreen;