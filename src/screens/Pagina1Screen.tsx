import React from 'react'
import { Button, Text, View,TouchableOpacity, } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
  return (
    <View style={styles.marginGlobal}>

      <Text style={styles.titleGlobal}>Ventana Numero 1</Text>

      <View style={styles.btn_contentH}>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'yellow'}}
          onPress={() => navigation.navigate('Pagina2Screen')}
        >
          <Text style={{...styles.btn_text, color:'black'}}>Ir a la ventana 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'gray', }}
          onPress={()=> navigation.navigate('Extra', {
            id: 1,
            nombre: 'Rafael',
            apellidos: 'Escobar Gutierrez',
            edad: 22
          })}
        >
          <Text style={styles.btn_text}>Ir a la ventana Extra </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
