import * as React from 'react';
import { View, Text, Alert, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import cssConstants from '../config/css-constants';


export default function Header(props: { children: string }) {


    return (
        <View style={styles.container}>
            {/* {props.goBack && <Image source={require('../assets/chevron-left.png')}></Image>} */}
            <Text style={styles.text}>{(props as any)?.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontWeight: '700',
        fontSize: cssConstants.MEDIUM_FONT_SIZE,
        paddingLeft: cssConstants.CONTAINER_PADDING,
        color: colors.primaryTextColor
    }
});

