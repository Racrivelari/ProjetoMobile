import {Image, Text,TouchableOpacity, View} from 'react-native'
import {styles} from '../styles/VacinaStyle';

const Vacina = ({item}) => {

    // const showItem = () => {
    //     console.log(JSON.stringify(item))
    // }

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.card}>
                <Text style={styles.id}>{item.id}</Text>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.dose}>{item.dose}</Text>
                <Text style={styles.data}>{item.data}</Text>
                <View>
                    <Image style={styles.imagem} source={require('../assets/images/image-comprovante.png')} />
                </View>
                <Text style={styles.proxima}>Proxima dose em: {item.proxima}</Text>
            </TouchableOpacity >
        </View>
    )
}

export default Vacina