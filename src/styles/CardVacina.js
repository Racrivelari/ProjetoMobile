import { StyleSheet } from 'react-native'

const stylesVacinas = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        width: 180,
        height: 180,
        marginTop: 10,
        alignItems: 'center'
    },
    nome: {
        color: '#3F92C5',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
    },
    dose: {
        color: 'white',
        backgroundColor: '#3F92C5',
        fontSize: 12,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        width: '50%',
        marginTop: 3
    },
    data: {
        color: '#8B8B8B',
        fontSize: 12,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        marginTop: 3
    },
    imagem: {
        width: 160,
        height: 80,
        marginTop: 3
    },
    proxima: {
        color: '#FD7979',
        fontSize: 12,
        alignSelf: 'flex-end',
        fontFamily: 'AveriaLibre-Regular',
        margin: 4
    },
    id: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        position: 'absolute',
        fontSize: 20
    }

})

export { stylesVacinas }