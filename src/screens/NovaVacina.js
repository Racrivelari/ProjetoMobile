import { View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import {styles} from '../styles/NovaVacinaStyle';
import {cadastrarVacina}  from "../components/ArrayVacinas";

const NovaVacina = (props) => {

//tratamento de data
    const [openVac, setOpenVac] = useState(false)
    const [openProx, setOpenProx] = useState(false)

    const handleDateVacSelect = (dateVac) => {
        setDateVac(dateVac);
        setOpenVac(false);
    };
    
    const handleDateProxSelect = (dateProx) => {
        setDateProx(dateProx);
        setOpenProx(false);
    };

    const formatDate = (date) =>{
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    }

    const [nome, setNome] = useState('');
    const [dose, setDose] = useState('1a. dose');
    const [dateVac, setDateVac] = useState(new Date())
    const [dateProx, setDateProx] = useState(new Date())

    return (

        <View style={styles.container}>
            <View style={{ marginTop: 70 }}></View>
            <View style={styles.row}>
                <Text style={styles.label}>Data de vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenVac(true)}  >
                    <Image style ={{position: 'absolute', width: 20, height: 25, marginLeft:130, marginTop: 5}} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateVac)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={openVac} date={dateVac} onDateChange={(date) => setDateVac(date)} locale='pt-BR' mode='date' 
                    onConfirm={handleDateVacSelect} 
                    onCancel={() => setOpenVac(false)}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Vacina</Text>
                <TextInput onChangeText={setNome} value={nome} style={styles.input} placeholder="Hepatite B" placeholderTextColor="#419ED7" />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Dose</Text>
                <RadioButton.Group onValueChange={setDose} value={dose}>
                    <View style={styles.containerRadio}>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="1a. dose" color='#3F92C5'  />
                            <Text style={styles.textI}>1a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="2a. dose" color='#3F92C5' />
                            <Text style={styles.textI}>2a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="3a. dose" color='#3F92C5' />
                            <Text style={styles.textI}>3a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="Dose única" color='#3F92C5' />
                            <Text style={styles.textI}>Dose única </Text>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View style={[styles.row]}>
                <Text style={styles.label}>Comprovante</Text>
                <CustomButton color= "#419ED7" width={170} height={30} text= "Selecione imagem..."/>
            </View>
            <Image style ={{width: 180, height: 90, marginLeft:160}} source={require('../assets/images/image-comprovante.png')} />
            <View style={[styles.row, {marginTop:15}]}>
                <Text style={styles.label}>Próxima vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenProx(true)}  >
                    <Image style ={{position: 'absolute', width: 20, height: 25, marginLeft:130, marginTop: 5}} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateProx)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={openProx} locale='pt-BR' date={dateProx}  onDateChange={(date) => setDateProx(date)} mode='date' 
                    onConfirm={handleDateProxSelect} 
                    onCancel={() => setOpenProx(false)}/>
            </View>
            <View style={styles.botoes}>
                {/* <CustomButton onPress={() => props.navigation.pop()} color= "#37BD6D" width={160} height={40} text= "Cadastrar"/> */}
                <CustomButton  onPress={() => cadastrarVacina(nome, formatDate(dateVac), formatDate(dateProx), dose, props)} color= "#37BD6D" width={160} height={40} text= "Cadastrar"/>
            </View>
        </View>
    );
};

export default NovaVacina

