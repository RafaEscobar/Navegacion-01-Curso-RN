import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Text>Holaaa</Text>
      </NavigationContainer>
    </SafeAreaView>
  );
};
 