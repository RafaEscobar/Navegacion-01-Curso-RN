import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Pagina2Screen = () => {
 
  const navigator:any = useNavigation();
  
  return (
    <View>
        <Text>Pagina #2</Text>
        <Button 
          title='Ir a pagina #3'
          onPress={() => navigator.navigate('Pagina3Screen')}
        />
    </View>
  )
}
