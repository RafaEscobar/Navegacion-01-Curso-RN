import React from 'react'
import { Text, View,TouchableOpacity, } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

//! 9) Creamos la interfaz Props que extiende de StackScreenProps 
//* El type es <any, any> ya que esta pantalla no requiere de la recepcion de argumentos, sino solo el trabajo de la navegacion
interface Props extends StackScreenProps<any,any>{};

//! 10) Generamos la arrowFunction con la desestructuracion del -navigation-
//* Dicha desestructuracion apunta a la interfaz Props
export const Pagina1Screen = ({navigation}:Props) => {
  return (
    //* Abrimos una View 1 -contendor principal-
    <View style={styles.marginGlobal}>
      {/* //* Generamos un titulo  */}
      <Text style={styles.titleGlobal}>Ventana Numero 1</Text>
      {/* //* Generamos una View 2 -contendor secundario- */}
      <View style={styles.btn_contentH}>
        {/* //! 11) Creamos un -TouchableOpacity- que servira como btn */}
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'yellow'}}
          //! 12) En el onPress ejecutamos el -navigation.navigate('nomScreen)- el cual nos permite ir hacia la Screen indicada. 
          onPress={() => navigation.navigate('Pagina2Screen')}
        >
          {/* //* Generamos el txt del btn */}
          <Text style={{...styles.btn_text, color:'black'}}>Ir a la ventana 2 </Text>
        </TouchableOpacity>
        {/* //! 13) Creamos un -TouchableOpacity- como el btn que ejecutara un onPress que nos lleve a una Screen indicada junto con ciertos parametros indicados */}
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'gray', }}
          //! 14) En el onPress ejecutamos el -navigation.navigate('nomScreen) y como segundo parametro* especificamos los argumentos que enviaremos 
          onPress={()=> navigation.navigate('Extra', {
            //* Es como especificar propiedades y sus valores...
            id: 1,
            nombre: 'Rafael',
            apellidos: 'Escobar Gutierrez',
            edad: 22
          })}
        >
          {/* //* Generamos el txt del btn */}
          <Text style={styles.btn_text}>Ir a la ventana Extra </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
