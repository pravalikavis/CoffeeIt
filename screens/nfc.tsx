import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import cssConstants from '../config/css-constants';
import SubHeader from '../shared/sub-header';
import { useSelector } from 'react-redux';
import { setCoffeeMachine } from '../redux/actions';
import store from '../redux/store';
import screens from '../Navigation/screens';



function NfcScreen({ navigation }) {
    const coffeeMachine = useSelector((state: any) => state.coffeeMachine)

    const setCoffeeMachineName = () => {
        store.dispatch(setCoffeeMachine('Lex'));
        navigateToNextScreen();
    }

    React.useEffect(() => {
        navigateToNextScreen();
    })

    const navigateToNextScreen = () => {
        coffeeMachine && navigation.navigate(screens.STYLE)
    }

    return (
        <TouchableWithoutFeedback onPress={() => setCoffeeMachineName()}>
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
        </TouchableWithoutFeedback>
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

