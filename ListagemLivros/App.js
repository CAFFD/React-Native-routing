import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaLivrosScreen from './screens/ListaLivrosScreen';
import DetalhesLivroScreen from './screens/DetalhesLivroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lista'>
        <Stack.Screen 
          name="Lista" 
          component={ListaLivrosScreen} 
          options={{ title: 'Lista de Livros' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetalhesLivroScreen} 
          options={{ title: 'Detalhes do Livro' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}