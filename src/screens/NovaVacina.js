import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button/Button';


const NovaVacina = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    return (

        <View style={styles.container}>

            <View style={styles.nav}>
                <Image source={require('../assets/images/icone-vacina.png')} />
                <Text style={styles.text}>Nova Vacina</Text>
            </View>

            <View style={styles.login}>

                <View style={{ flexDirection: 'column', textAlign: 'right', marginTop: 60 }}>
                    <Text style={styles.label}>Data de vacinação</Text>
                    <Text style={styles.label}>Vacina</Text>
                    <Text style={styles.label}>Dose</Text>
                    <Text style={styles.label}>Comprovante</Text>
                    <Text style={styles.label}>Próxima Vacinação</Text>
                </View>


                <View style={{ flexDirection: 'column', marginLeft: 5, marginTop: 63 }}>
                    <TextInput style={styles.input} placeholder="11/08/2022" placeholderTextColor="#419ED7" />
                    <TextInput style={styles.input} placeholder="Hepatite B" placeholderTextColor="#419ED7" />

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="first" color="blue" uncheckedColor="#FFFFFF" />
                            <Text style={styles.textI}>1a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="second" color="blue" uncheckedColor="#FFFFFF" />
                            <Text style={styles.textI}>2a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="third" color="blue" uncheckedColor="#FFFFFF" />
                            <Text style={styles.textI}>3a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="fourth" color="blue" uncheckedColor="#FFFFFF" />
                            <Text style={styles.textI}>Dose única</Text>
                        </View>

                    </View>

                    <Button title="Selecionar imagem..." onPress={() => setOpen(true)} />
                    <TextInput style={styles.input} placeholder="11/08/2022" placeholderTextColor="#419ED7" />

                </View>

                <View style={styles.botoes}>
                    <CustomButton onPress={() => props.navigation.push('Home')} color= "#37BD6D" size={160} marginTop={300}  text= "Cadastrar"/>
                </View>

            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#C1E7E3',
    },
    login: {
        backgroundColor: '#ADD5D0',
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    label: {
        color: 'white',
        marginLeft: 4,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
        marginTop: 4,
        padding: 7
    },
    textB: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    textI: {
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    botoes: {
        justifyContent: 'center',
        marginLeft: -260,
    },
    button: {
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        shadowColor: 'black',
        elevation: 10,
        marginTop: 300
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 230,
        height: 30,
        marginTop: 6,
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
    },
});


export default NovaVacina

