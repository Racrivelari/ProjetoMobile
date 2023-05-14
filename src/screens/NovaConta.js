import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import {styles} from '../styles/NovaContaStyle'
import {formatDate } from "../components/ArrayVacinas";


const NovaConta = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('Masculino');

    const handleDateSelect = (date) => {
        setDate(date);
        setOpen(false);
    };

    return (

        <View style={styles.container}>

            <View style={{ marginTop: 70 }}></View>

            <View style={styles.row}>
                <Text style={styles.label}>Nome completo</Text>
                <TextInput style={styles.input} placeholder="Jurandir Pereira" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Sexo</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.containerRadio}>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="Masculino" color='#3F92C5' />
                            <Text style={styles.textI}> Masculino </Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="Feminino" color='#3F92C5' />
                            <Text style={styles.textI}> Feminino </Text>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Data nascimento</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpen(true)}  >
                    <Image style ={styles.calendarIcon} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(date)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={open} date={date} locale='pt-BR' mode='date' 
                    onConfirm={handleDateSelect} 
                    onCancel={() => setOpen(false)}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="*******" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Repetir senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="****" placeholderTextColor="#419ED7" />
            </View>

            <Text style={styles.textSenhaInvalida}>Senha não confere!</Text>

            <View style={styles.botoes}>
                <CustomButton onPress={() => props.navigation.pop()} color= "#37BD6D" width={160} height={40} text= "Cadastrar"/>
            </View>

        </View>

    );
};

export default NovaConta

