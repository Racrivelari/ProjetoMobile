import { View, Image, FlatList, TextInput } from 'react-native'
import CustomButton from '../components/Button';
import { styles } from '../styles/HomeStyle';
// import Vacina from "../components/Vacina";
import React from 'react';
import {Vacina, listaVacinas} from "../components/ArrayVacinas";
import { useIsFocused } from '@react-navigation/native';

const Home = (props) => {

  const attTela = useIsFocused();
 
  return (

    <View style={styles.container}>

      <View style={styles.pesquisa}>
        <Image style={{ position: 'absolute', width: 20, height: 20, marginLeft: 10, marginTop: 10 }} source={require('../assets/images/icon-pesquisa.png')} />
        <TextInput placeholder='PESQUISAR VACINA...' style={styles.textoPesquisa} />
      </View>

      <FlatList data={listaVacinas} extraData={attTela} renderItem={({item}) => Vacina({item}, props)} keyExtractor={item => item.id} numColumns={2} /> 

      <View style={styles.botao}>
        <CustomButton onPress={() => props.navigation.push('NovaVacina')} color="#37BD6D" width={160} height={40} text="Nova vacina" />
      </View>

    </View>

  );
};

export default Home

