import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NfcScreen from '../screens/nfc';
import Header from '../shared/header';


const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dark Roasted Beans" component={NfcScreen}
                    options={{
                        headerTitle: (props) => <Header {...props} goBack={false} />,
                        headerShadowVisible: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;