import * as React from 'react';
import { View, Text, Alert, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import cssConstants from '../config/css-constants';

/**
 * A shared component that can be rendered in every screen to display a sub heading.
 *
 * @export
 * @param {{ text: string }} props
 * @returns
 */
export default function SubHeader(props: { text: string }) {


    return (
        <Text style={styles.text}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '400',
        fontSize: cssConstants.LARGE_FONT_SIZE,
        marginLeft: cssConstants.DEFAULT_MARGIN,
        lineHeight: 33,
        color: colors.primaryTextColor
    }
});

