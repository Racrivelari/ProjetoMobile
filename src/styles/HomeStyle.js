import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0',
        padding: 10,
    },
    botao: {
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#37BD6D',
        elevation: 3,
        marginBottom: 50,
    },
    pesquisa: {
        flexDirection: 'row',
        marginTop: 10,
        height: 40,
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 3
    },
    textoPesquisa: {
        marginLeft: 30,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: '#8B8B8B',
    },
    img:{
        position: 'absolute',
        width: 20,
        height: 20,
        marginLeft: 10,
        marginTop: 10,
    }

});

export { styles }