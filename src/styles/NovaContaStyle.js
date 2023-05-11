import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textD: {
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16
    },
    containerRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    textB: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    textI: {
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        alignSelf: 'center',
    },
    botoes: {
        justifyContent: 'center',
        flex: 1
    },
    button: {
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        shadowColor: 'black',
        elevation: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    label: {
        marginRight: 10,
        width: 120,
        color: 'white',
        marginLeft: 4,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
    },
    input: {
        backgroundColor: 'white',
        width: 230,
        height: 30,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: '#419ED7',
    },
});

export {styles};