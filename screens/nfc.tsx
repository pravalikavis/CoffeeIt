import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import cssConstants from '../config/css-constants';
import SubHeader from '../shared/sub-header';



function NfcScreen() {

    return (
        <View style={styles.container}>
            <SubHeader text={'Tab the machine to start'}></SubHeader>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/coffee-mac.png')} />
                <Image style={styles.overlay} source={require('../assets/swipe-card.png')} />
            </View>


            <Text style={styles.subText}>
                How does this work
            </Text>
        </View>
    );
}

export default NfcScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBackgroundColor,
        display: 'flex',
        height: '100%'
    },
    subText: {
        fontWeight: '500',
        textDecorationLine: 'underline',
        marginLeft: cssConstants.DEFAULT_MARGIN,
        color: colors.primaryTextColor
    },
    imageContainer: {
        marginTop: 100,
        marginBottom: cssConstants.DEFAULT_MARGIN
    },
    overlay: {
        position: 'absolute',
        right: 0,
        // backgroundColor: colors.backgroundColor
    }
});

