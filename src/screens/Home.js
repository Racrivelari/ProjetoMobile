import { View, Image, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react';
import CustomButton from '../components/Button';
import { styles } from '../styles/HomeStyle';
import Vacina from "../components/Vacina";

const Home = (props) => {

  const [pesquisa, setPesquisa] = useState("");

  const listaVacinas = [
    {
      id: 1,
      nome: 'BCG',
      data: '11/06/2022',
      dose: 'Dose única',
      proxima: "Não há próxima dose"
    },
    {
      id: 2,
      nome: 'Febre amarela',
      data: '11/10/2022',
      dose: '1a. dose',
      proxima: '11/10/2023'
    },
    {
      id: 3,
      nome: 'Hepatite B',
      data: '11/08/2022',
      dose: '1a. dose',
      proxima: '11/10/2022',
    },
    {
      id: 4,
      nome: 'Poliomelite',
      data: '11/08/2022',
      dose: '1a. dose',
      proxima: '11/10/2022',
    },
    {
      id: 5,
      nome: 'Gripe',
      data: '22/12/2019',
      dose: '3',
      proxima: '22/12/2029'
    },

  ]

  return (

    <View style={styles.container}>

      <View style={styles.pesquisa}>
        <Image style={{ position: 'absolute', width: 20, height: 20, marginLeft: 10, marginTop: 10 }} source={require('../assets/images/icon-pesquisa.png')} />
        <TextInput placeholder='PESQUISAR VACINA...' style={styles.textoPesquisa} />
      </View>

      <View style={styles.lista}>
        <FlatList data={listaVacinas} renderItem={Vacina} keyExtractor={item => item.id} numColumns={2} />
      </View>

      <View style={styles.botao}>
        <CustomButton onPress={() => props.navigation.push('NovaVacina')} color="#37BD6D" width={160} height={40} text="Nova vacina" />
      </View>

    </View>

  );
};

export default Home

