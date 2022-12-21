import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    marginGlobal: {
        margin: 15,
    },
    titleGlobal: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
    },
    btn_contentH: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center',
    },
    btn: {
        width: 100,
        height: 100,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: 'gray',
    },
    btn_text: {
        fontSize:12,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

});