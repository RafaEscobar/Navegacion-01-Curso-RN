import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
        <Text>Pagina #3</Text>
        <Button 
          title='Regresar con POP'
          onPress={() => navigation.pop(2)}
        /> 
        <Text></Text>
        <Button 
          title='Regresar con GoBack'
          onPress={() => navigation.goBack()}
        />
        <Text></Text>
        <Button 
          title='Regresar al Home'
          onPress={() => navigation.popToTop()}
        />
         <Text></Text>
        <Button 
          title='Regremplazar'
          onPress={() => navigation.replace('Extra')}
        />
    </View>
  )
}
