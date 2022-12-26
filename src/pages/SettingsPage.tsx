import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

//* Generamos nuestra arrowFunction 
export const SettingsPage = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>Aqui van los ajustes</Text>
    </View>
  )
}
