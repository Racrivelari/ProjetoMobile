import { View, Image, FlatList, TextInput } from 'react-native'
import CustomButton from '../components/Button';
import { styles } from '../styles/HomeStyle';
import React, { useState } from 'react';
import { Vacina, listaVacinas } from "../components/ArrayVacinas";
import { useIsFocused } from '@react-navigation/native';

const Home = (props) => {

  const [searchText, setSearchText] = useState('');
  const attTela = useIsFocused();

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredVacinas = listaVacinas.filter(
    (vacina) =>
      vacina.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <View style={styles.pesquisa}>
        <Image style={styles.img} source={require('../assets/images/icon-pesquisa.png')}/>
        <TextInput placeholder="PESQUISAR VACINA..." style={styles.textoPesquisa} onChangeText={handleSearch}/>
      </View>

      <FlatList data={filteredVacinas}
        extraData={attTela}
        renderItem={({ item }) => Vacina({ item }, props)}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      <View style={styles.botao}>
        <CustomButton onPress={() => props.navigation.push('NovaVacina')} color="#37BD6D" width={160} height={40} text="Nova vacina"/>
      </View>
      
    </View>
  );
};

export default Home;
