import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsPage } from '../pages/SettingsPage';
import { useWindowDimensions } from 'react-native';

//! 33) Creamos nuestra constante que apunta al -createDrawerNavigator-
const Drawer = createDrawerNavigator();

//* Generamos nuestra arrowFunction
export const DrawerNavigator = () => {

  //! 35) Creamos el hook -useWindowDimensions- para poder trabajar con las dimsensiones del dispositivo...
  //* Desestructuramos el width
  const {width} = useWindowDimensions();

  //! 36) Generamos un arrowFunction que nos retornara el valor 'permanet' o 'front' en caso de que el width de nuestro dispositivo se modifique a 'mayor igual' a: 768 de ancho
  const openDra = () => {
    return (width>=768 ? 'permanent' : 'front')
  }

  return (
    //! 37) Abrimos un Drawer.Navigator
    <Drawer.Navigator 
      // Establecemos las opciones: -ocultar la cabecera-, -estado del drawer, llamando a la funcion que nos retornara el valor de dicho estado-
      screenOptions={{ headerShown: false, drawerType: openDra()  }}
    >
      {/* //! 38) Generamos las Screens que competen al -Drawer- */}
      <Drawer.Screen name="StackNavigator" options={{drawerLabel:'Pantalla principal'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsPage" options={{ headerShown: true, title: 'Ajustes' }} component={SettingsPage} />
    </Drawer.Navigator>
  );
}