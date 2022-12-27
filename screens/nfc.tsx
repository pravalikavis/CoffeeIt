import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import cssConstants from '../config/css-constants';



function NfcScreen() {

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Tap the machine to start
                </Text>
            </View>
            <Image source={require('../assets/coffee-mac.png')} />
            <Image source={require('../assets/swipe-card.png')} />

            <Text>
                How does this work
            </Text>
        </View>
    );
}

export default NfcScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',

    },
    subText: {
        fontWeight: '500'
    },
    subView:{
        padding:10
    }
});

