import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text } from 'react-native'
import { Image, View } from 'react-native';

import CustomDrawer from "./CustomDrawer";
import Home from '../screens/Home'
import ProximasVacinas from '../screens/ProximasVacinas'
import IconVacina from '../assets/images/icone-vacina.png';
import IconCalendar from '../assets/images/calendar.png';

const Drawer = createDrawerNavigator()

const headerOptions = () => {
    return {
        drawerLabelStyle: { color: 'white' },
        drawerStyle: { backgroundColor: '#ADD5D0', width: '80%' },
        headerShown: false,
        headerStyle: { backgroundColor: '#C1E7E3' },
        headerTintColor: '#ADD4D0',
    }
};

const DrawerScreenOptions = (drawerItemLabel, iconURL) => {
    return {
        headerShown: true,
        headerTitle: {drawerItemLabel},
        headerTitleStyle: {fontSize: 34, fontFamily: 'AveriaLibre-Regular', color: '#419ED7',},
        drawerLabel: () => (
            <View style={styles.drawerItem}>
                <Image source={iconURL} style={{ width: 28, height: 30, marginRight: 12 }} />
                <Text style={styles.txt}>{drawerItemLabel}</Text>
            </View>
        ),
    }
};

const DrawerNavigation = () => {
    return (

        <Drawer.Navigator screenOptions={headerOptions} drawerContent={(props) => <CustomDrawer {...props} />}>

            <Drawer.Screen
                name="Minhas vacinas"
                component={Home}
                options={{
                    ...DrawerScreenOptions('Minhas vacinas', IconVacina),
                }}
            />

            <Drawer.Screen
                name="Próximas vacinas"
                component={ProximasVacinas}
                options={{
                    ...DrawerScreenOptions('Próximas vacinas', IconCalendar),
                }}
            />

        </Drawer.Navigator>

    )
}

const styles = StyleSheet.create({
    txt: {
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 26,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },
})

export default DrawerNavigation;
