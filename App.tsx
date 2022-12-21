import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    //! 1) Cuando usamos cualquier tipo de navegacion debemos envolver el todo en un <NavigationContainer>
      <NavigationContainer>
        {/* //! 2) Llamamos a nuestro componente principal >>> En este caso al -StackNavigator- */}
        <StackNavigator />
      </NavigationContainer>
  );
};
 