import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NfcScreen from '../screens/nfc';
import Header from '../shared/header';
import screens from './screens';
import StyleScreen from '../screens/style-screen';
import { useSelector } from 'react-redux';
import SizeScreen from '../screens/size-screen';
import ExtraScreen from '../screens/extra';


const Stack = createNativeStackNavigator();

function MainNavigator() {
    const coffeeMachine = useSelector((state: any) => state.coffeeMachine)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={screens.NFC} component={NfcScreen}
                    options={{
                        title: "Dark Roasted Beans",
                        headerTitle: Header,
                        headerShadowVisible: false,
                    }} />
                <Stack.Screen name={screens.STYLE} component={StyleScreen}
                    options={{
                        title: "Brew with " + coffeeMachine,
                        headerTitle: Header,
                        headerShadowVisible: false,
                        headerTintColor: 'black'
                    }} />
                <Stack.Screen name={screens.SIZE} component={SizeScreen}
                    options={{
                        title: "Brew with " + coffeeMachine,
                        headerTitle: Header,
                        headerShadowVisible: false,
                        headerTintColor: 'black'
                    }} />
                <Stack.Screen name={screens.EXTRA} component={ExtraScreen}
                    options={{
                        title: "Brew with " + coffeeMachine,
                        headerTitle: Header,
                        headerShadowVisible: false,
                        headerTintColor: 'black'
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;