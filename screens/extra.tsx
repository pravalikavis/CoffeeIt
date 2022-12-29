import { View, StyleSheet, FlatList, Text, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import SubHeader from '../shared/sub-header';
import data from '../data/data';
import { useEffect, useState } from "react";
import cssConstants from "../config/css-constants";
import store from "../redux/store";
import { setExtra, setSize } from "../redux/actions";
import screens from "../Navigation/screens";

export default function ExtraScreen({ navigation }) {

    const [extra, setExtraData] = useState(Array(data.extras.length).fill(undefined))

    useEffect(() => {
        store.dispatch(setExtra(undefined));
    }, [])

    useEffect(() => {
        if (extra.every(data => data)) {
            navigation.navigate(screens.NFC)
        }
    })

    const onSubSelectionSelected = (index: number, id: any) => {
        const extraData = [...extra];
        extraData[index] = id;
        setExtraData(extraData)
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
                            <TouchableOpacity onPress={() => onSubSelectionSelected(index, subSection._id)}>
                                <View style={styles.subSectionCard} key={subSection._id}>
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

            <SubHeader text={'Select your size'}></SubHeader>
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
        borderBottomWidth: cssConstants.BASE_BORDER_WIDTH
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
