import * as React from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import SubHeader from '../shared/sub-header';
import data from '../data/data';
import { useEffect, useState } from "react";
import cssConstants from "../config/css-constants";
import store from "../redux/store";
import { setExtra } from "../redux/actions";
import screens from "../Navigation/screens";
import { useSelector } from 'react-redux';

/**
 * Renders extra's screen to customize things like sugar and type of milk
 *
 * @export
 * @param {*} { navigation, route }
 * @returns
 */
export default function ExtraScreen({ navigation, route }) {

    const [extra, setExtraData] = useState(Array(data.extras.length).fill(undefined))
    const extraSavedData = useSelector((data: any) => data.extra)

    useEffect(() => {
        if (route && route.params && route.params.skipScreen == true) {
            if (extraSavedData)
                navigation.navigate(screens.CHECKOUT)
        }
    }, [])

    useEffect(() => {
        navigateToNextScreen();
    }, extra)

    const navigateToNextScreen = () => {
        if (extra.every(data => data)) {
            store.dispatch(setExtra(extra))
            navigation.navigate(screens.CHECKOUT)
        }
    }

    const onSubSelectionSelected = (index: number, id: any) => {
        if (extra[index] == id) {
            navigateToNextScreen();
        }else{
            const extraData = [...extra];
            extraData[index] = id;
            setExtraData(extraData)
        }
    }


    const Card = ({ item, index }: {
        item: {
            _id: number;
            name: string;
            subselections: {
                _id: number;
                name: string;
            }[];
            image?: any
        }, index
    }) => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.expandedCard}>
                    <View style={styles.cardDesign}>
                        {item.image && <Image source={item.image} style={styles.cardImage} />}
                        <Text style={styles.cardTitle}>{item.name}</Text>
                    </View>
                    {
                        item.subselections && item.subselections.map(subSection => (
                            <TouchableOpacity onPress={() => onSubSelectionSelected(index, subSection._id)} key={subSection._id}>
                                <View style={styles.subSectionCard} >
                                    <Text style={styles.cardTitle}>{subSection.name}</Text>
                                    {extra[index] == subSection._id
                                        ? <Image style={styles.icon} source={require('../assets/radio-button-checked.png')} />
                                        : <Image style={styles.icon} source={require('../assets/radio-button-unchecked.png')} />}
                                </View>
                            </TouchableOpacity>

                        ))
                    }
                </View>
            </View>
        )
    }

    const keyExtractorFn = (data) => data._id

    return (
        <View style={styles.container}>

            <SubHeader text={"Select your extra's"}></SubHeader>
            <FlatList data={data.extras} renderItem={Card} keyExtractor={keyExtractorFn} />

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
        height: 94,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: colors.secondaryTextColor,
        borderBottomWidth: cssConstants.BASE_BORDER_WIDTH,

    },
    cardImage: {
        width: 45,
        height: 45,
        borderRadius: 10
    },
    cardTitle: {
        marginLeft: cssConstants.DEFAULT_MARGIN,
        color: colors.secondaryTextColor,
        fontSize: cssConstants.MEDIUM_FONT_SIZE
    },
    expandedCard: {
        backgroundColor: colors.secondaryBgColor,
        paddingHorizontal: cssConstants.CONTAINER_PADDING * 2,
        borderRadius: cssConstants.BASE_BORDER_RADIUS
    },
    subSectionCard: {
        backgroundColor: colors.cardBgColor,
        marginVertical: cssConstants.CONTAINER_PADDING,
        height: 56,
        borderRadius: cssConstants.INPUT_BORDER_RADIUS,
        display: "flex",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    icon: {
        marginRight: cssConstants.DEFAULT_MARGIN,
    }

});
