import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button/Button';



const EditarVacina = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    return (

        <View style={styles.container}>

            <View style={styles.nav}>
                <Image source={require('../assets/images/icone-vacina.png')} />
                <Text style={styles.text}>Editar Vacina</Text>
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
                            <RadioButton value="second" color="blue" uncheckedColor="#FFFFFF" />
                            <Text style={styles.textI}>3a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton value="second" color="blue" uncheckedColor="#FFFFFF" />
                            <Text style={styles.textI}>Dose única</Text>
                        </View>

                    </View>

                    <TouchableOpacity style={{width: 220, height:30, alignItems:'center',justifyContent: 'center', backgroundColor: '#419ED7', shadowColor: 'black',elevation: 10, marginTop:5}}><Text style={styles.textB}>Selecione uma imagem...</Text></TouchableOpacity>
                    {/* <DatePicker
                        modal open={open} date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    /> */}
                    <TextInput style={styles.input} placeholder="11/08/2022" placeholderTextColor="#419ED7" />

                    <View style ={styles.botoes}>
                        <CustomButton onPress={() => props.navigation.push('Home')} style={{width: 140, height:40, alignItems:'center',justifyContent: 'center', backgroundColor: '#37BD6D', shadowColor: 'black',elevation: 10,}} text= "Salvar alterações"/>
                        <TouchableOpacity style={{width: 140, height:40, alignItems:'center',justifyContent: 'center', backgroundColor: '#37BD6D', shadowColor: 'black',elevation: 10,}}><Text style={styles.textB}>Salvar alterações</Text></TouchableOpacity>
                        <TouchableOpacity style={{width: 190, height:40, alignItems:'center',justifyContent: 'center', backgroundColor: '#FD7979', marginTop:70, shadowColor: 'black',elevation: 10,}}><Text style={styles.textB}>Excluir</Text></TouchableOpacity>
                    </View>
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
        alignItems:'center'
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


export default EditarVacina

