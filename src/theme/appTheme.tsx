import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Margen en todas direcciones para todas las Screens
    marginGlobal: {
        margin: 15,
    },
    // Titulos de todas las Screens
    titleGlobal: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
    },
    // Contenedor Horizontal de los btns en las Screens
    btn_contentH: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center',
    },
    // Estilizacion de todos los btns
    btn: {
        width: 100,
        height: 100,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: 'gray',
    },
    // Estilizacion de todos los textos de los btns
    btn_text: {
        fontSize:12,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

});