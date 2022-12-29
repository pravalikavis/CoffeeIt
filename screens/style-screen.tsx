import { View, StyleSheet, FlatList, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import SubHeader from '../shared/sub-header';
import data from '../data/data';
import { useEffect, useState } from "react";
import cssConstants from "../config/css-constants";
import store from "../redux/store";
import { setStyle } from "../redux/actions";
import screens from "../Navigation/screens";

export default function StyleScreen({ navigation }) {


    useEffect(() => {
        store.dispatch(setStyle(undefined));
    }, [])

    const onClick = (value) => {
        store.dispatch(setStyle(value));
        navigation.navigate(screens.SIZE)
    }

    const Card = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onClick(item._id)} style={styles.cardContainer}>
                <View style={styles.cardDesign}>
                    {item.image && <Image source={item.image} style={styles.cardImage} />}
                    <Text style={styles.cardTitle}>{item.name}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    const keyExtractorFn = (data) => data._id

    return (
        <View style={styles.container}>

            <SubHeader text={'Select your style'}></SubHeader>
            <FlatList data={data.types} renderItem={Card} keyExtractor={keyExtractorFn} />

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBackgroundColor,
        display: 'flex',
        height: '100%'
    },
    cardContainer: {
        display: 'flex',
        width: '100%',
        padding: cssConstants.CONTAINER_PADDING
    },
    cardDesign: {
        backgroundColor: colors.secondaryBgColor,
        borderRadius: cssConstants.BASE_BORDER_RADIUS,
        height: 94,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: cssConstants.CONTAINER_PADDING
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    cardTitle: {
        marginLeft: cssConstants.DEFAULT_MARGIN,
        color: colors.secondaryTextColor,
        fontSize: cssConstants.MEDIUM_FONT_SIZE
    }
});
