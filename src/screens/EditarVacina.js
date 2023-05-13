import { View, Text, Modal, Image, TextInput, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import { styles } from '../styles/EditarVacinaStyle';
import { editarVacina, excluirVacina } from "../components/ArrayVacinas";


const EditarVacina = (props) => {
    const vacina = props.route.params.item;

    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState(vacina.nome);
    const [dose, setDose] = useState(vacina.dose);
    let [day, month, year] = props.route.params.item.dataVac.split('/');
    let [day2, month2, year2] = props.route.params.item.dataProx.split('/');

    const [dateProx, setDateProx] = useState(new Date(year2, month2 - 1, day2));
    const [dateVac, setDateVac] = useState(new Date(year, month - 1, day));

    const [openProx, setOpenProx] = useState(false)
    const [openVac, setOpenVac] = useState(false)


    const ArrayData = (vacina) => {
        console.log(vacina.id)
        console.log(vacina.nome)
        console.log(vacina.dataProx)
        console.log(vacina.dataVac)
        console.log(vacina.dose)
    };

    const handleDateVacSelect = (dateVac) => {
        setDateVac(dateVac);
        setOpenVac(false);
    };

    const handleDateProxSelect = (dateProx) => {
        setDateProx(dateProx);
        setOpenProx(false);
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    }
    return (

        <View style={styles.container}>
            <View style={{ marginTop: 70 }}></View>
            <View style={styles.row}>
                <Text style={styles.label}>Data de vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenVac(true)}  >
                    <Image style={{ position: 'absolute', width: 20, height: 25, marginLeft: 130, marginTop: 5 }} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateVac)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={openVac} date={dateVac} onDateChange={(date) => setDateVac(date)} locale='pt-BR' mode='date'
                    onConfirm={handleDateVacSelect}
                    onCancel={() => setOpenVac(false)} />
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
                            <RadioButton value="1a. dose" color='#3F92C5' />
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
                <CustomButton color="#419ED7" width={170} height={30} text="Selecione imagem..." />
            </View>
            <Image style={{ width: 180, height: 90, marginLeft: 160 }} source={require('../assets/images/image-comprovante.png')} />
            <View style={[styles.row, { marginTop: 15 }]}>
                <Text style={styles.label}>Próxima vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenProx(true)}  >
                    <Image style={{ position: 'absolute', width: 20, height: 25, marginLeft: 130, marginTop: 5 }} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateProx)} </Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    title='Selecione a data'
                    open={openProx}
                    locale='pt-BR'
                    date={dateProx}
                    onDateChange={(date) => setDateProx(date)}
                    mode='date'
                    onConfirm={handleDateProxSelect}
                    onCancel={() => setOpenProx(false)}
                />
            </View>

            <View>
                <Modal animationType="fade" transparent={true} visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: '#fff', padding: 20, width: '90%' }}>
                            <Text style={{ color: '#FD7979', fontFamily: 'AveriaLibre-Regular', fontSize: 22, marginBottom: 26, textAlign: 'center' }}>Tem certeza que deseja remover essa vacina?</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <CustomButton onPress={() => { excluirVacina(vacina.id, props) }} color="#FD7979" width={140} height={40} text="SIM" />
                                <CustomButton onPress={() => setModalVisible(false)} color="#3F92C5" width={140} height={40} text="CANCELAR" />
                            </View>
                        </View>
                    </View>

                </Modal>
            </View>

            <View style={styles.botoes}>
                <CustomButton onPress={() => { editarVacina(vacina.id, nome, formatDate(dateVac), formatDate(dateProx), dose, props) }} color="#37BD6D" width={160} height={40} text="Salvar alterações" />
                <CustomButton onPress={() => setModalVisible(true)} color="#FD7979" width={160} height={40} marginTop={40} text="Excluir" />
                <CustomButton onPress={() => { ArrayData(vacina) }} color="#FD7979" width={160} height={40} marginTop={40} text="ARRAY" />
            </View>

        </View>

    );
};

export default EditarVacina

