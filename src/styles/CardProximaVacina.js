import { StyleSheet } from 'react-native'

const stylesProximas = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        
        marginTop: 10,
    
        backgroundColor: 'white',
        width:'95%',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
       flexDirection:'column',
       padding:4
    },
    nome: {
        color: '#3F92C5',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        marginLeft: 10
    },
    proximas: {
        color: '#8B8B8B',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        marginLeft: 10
    },
    id: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        position: 'absolute',
        fontSize: 20
    }

})

export { stylesProximas }