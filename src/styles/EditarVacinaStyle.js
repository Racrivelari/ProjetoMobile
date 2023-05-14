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
    text: {
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    botoes: {
        justifyContent: 'center',
        flex: 1
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
    calendarIcon:{
        position: 'absolute', 
        width: 20, 
        height: 25, 
        marginLeft: 130, 
        marginTop: 5
    },
    imgComprovante:{
        width: 180,
        height: 90, 
        marginLeft: 160 
    },
    v1Modal:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    },
    v2Modal:{
        backgroundColor: '#fff', 
        padding: 20,
        width: '90%'
    },
    v3Modal:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly' 
    },
    textModal:{
        color: '#FD7979', 
        fontFamily: 'AveriaLibre-Regular', 
        fontSize: 22,
        marginBottom: 26, 
        textAlign: 'center' 
    },
});

export {styles};