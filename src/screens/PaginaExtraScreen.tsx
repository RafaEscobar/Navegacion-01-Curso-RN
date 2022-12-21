import React from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Extra'>{};

export const PaginaExtraScreen = ({route}: Props) => {

  const params = route.params;

  return (
    <View style={{backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 20}}>ID: {params.id}</Text>
        <Text style={{fontSize: 20}}>Nombre: {params.nombre}</Text>
    </View>
  )
}
