import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Image style={{ height: 100, width: 100, alignSelf: 'center' }} source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} />
                <Text style={{ fontSize: 12, color: 'blue', alignSelf: 'center' }}>luana.teixeira@yahoo.com.br</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem labelStyle={{ color: 'white' }} label="Sair" onPress={() => { props.navigation.popToTop() }} />
            <DrawerItem labelStyle={{ color: 'white' }} label="Tela3" onPress={() => { props.navigation.push('Tela3'); props.navigation.closeDrawer() }} />

        </DrawerContentScrollView>

    )
}

export default CustomDrawer;