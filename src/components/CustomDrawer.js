import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{
                flex: 1,
                height: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: 'AveriaLibre-Regular',
                    fontSize: 30,
                    color: '#419ED7',
                }}> Olá Jurandir </Text>
            </View>


            <View style={{
                width: '85%',
                height: 2,
                backgroundColor: '#419ED7',
                alignSelf: 'center',
                marginBottom: 30
            }}
            ></View>


            <DrawerItemList {...props} />
            <View style={{}}>
                <DrawerItem label="Sair" onPress={() => { props.navigation.popToTop() }}/>
            </View>

        </DrawerContentScrollView>

    )
}

export default CustomDrawer;