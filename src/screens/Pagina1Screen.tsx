import React from 'react'
import { Button, Text, View, } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
  return (
    <View style={styles.marginGlobal}>
        <Text>Pagina #1</Text>
        <Button 
          title='Ir a la pagina #2'
          onPress={() => navigation.navigate('Pagina2Screen')}
        />
        <Text></Text>
        <Button 
          title='Ir a lo desconocido...'
          onPress={()=> navigation.navigate('Extra')}
        />

    </View>
  )
}
