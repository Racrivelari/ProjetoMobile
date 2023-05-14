import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CustomDrawerItem = ({ label, icon, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <View style={styles.drawerItem}>
            <Image style={styles.drawerIcon} source={icon} />
            <Text style={styles.drawerLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
);

const CustomDrawer = (props) => {
    return (
        
        <DrawerContentScrollView {...props}>

            {/* viewJurandir */}
            <View style={styles.vJurandir}>
                <Text style={styles.tJurandir}> Olá Jurandir </Text>
            </View>

            {/* viewLine */}
            <View style={styles.vLine}></View>

           <DrawerItemList {...props} /> 

            <CustomDrawerItem
                label="Sair"
                icon={require('../assets/images/logout.png')}
                onPress={() => {
                    props.navigation.popToTop();
                }}/>

        </DrawerContentScrollView>

    )
}

const styles = StyleSheet.create({
    vJurandir: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tJurandir: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        color: '#419ED7',
    },
    vLine: {
        width: '85%',
        height: 2,
        backgroundColor: '#419ED7',
        alignSelf: 'center',
        marginBottom: 30
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:40,
        marginVertical: 10
    },
    drawerIcon: {
        width: 28,
        height: 30,
        marginRight: 10,
    },
    drawerLabel: {
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 26,
    },
})

export default CustomDrawer;