import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NfcScreen from '../screens/nfc';
import Header from '../shared/header';
import screens from './screens';


const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={screens.NFC} component={NfcScreen}
                    options={{
                        title: "Dark Roasted Beans",
                        headerTitle: (props) => <Header {...props} goBack={false} />,
                        headerShadowVisible: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;