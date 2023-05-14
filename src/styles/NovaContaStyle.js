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
    calendarIcon:{
        position: 'absolute', 
        width: 20, 
        height: 25, 
        marginLeft:200, 
        marginTop: 5
    },
    textSenhaInvalida:{
        color: 'red', 
        fontFamily: 'AveriaLibre-Regular', 
        fontSize: 16, 
        marginLeft: 40
    },
});

export {styles};