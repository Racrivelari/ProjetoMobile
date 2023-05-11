import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Vacina = ({item}) => {

    const showItem = () => {
        console.log(JSON.stringify(item))
    }

    return(
        <TouchableOpacity style={styles.container} onPress={showItem}>
            <Text>{item.nome}</Text>
            <Text>Dose: {item.dose}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Próxima dose: {item.proxima}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        width: '45%',
        marginHorizontal: 10,
        marginVertical: 10,
    }
})

export default Vacina