import React from 'react';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
};
 