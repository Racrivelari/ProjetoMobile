import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textD: {
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#C1E7E3',
        width: "100%",
    },
    text: {
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    textB: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
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
   
    input: {
        backgroundColor: 'white',
        width: 160,
        height: 30,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: '#419ED7',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 8,
        color: 'white',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        width: 140,
    },
    containerRadio: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textI: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
    },
});

export {styles};