import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import colors from '../config/colors';
import cssConstants from '../config/css-constants';
import SubHeader from '../shared/sub-header';
import data from '../data/data';
import { useSelector } from 'react-redux';
import screens from '../Navigation/screens';

/**
 * Renders checkout screen that displays the selected coffee along with its customization
 *
 * @export
 * @param {*} { navigation }
 * @returns
 */
export default function CheckoutScreen({ navigation }) {

    const coffeeSavedData = useSelector((state: any) => state)
    const styleCardData = data.types.find(data => data._id == coffeeSavedData.style)
    const sizeCardData = data.sizes.find(data => data._id == coffeeSavedData.size)
    const extraCardsData = data.extras.map((data, index) => ({
        ...data, subselections: data.subselections
            .find(subData => subData._id == coffeeSavedData.extra[index])
    }))

    const onSubmit = () => {
        Alert.alert("Your coffee is ready!", "Do you want to order new coffee?", [{
            text: "Proceed",
            onPress: () => navigation.navigate(screens.NFC)
        }, {
            text: "Stay on checkout screen",
            style: "default"
        }])
    }

    const switchScreenToEdit = (screen: string) => {
        navigation.navigate(screen, { reRouteFromCheckout: true })
    }

    return (
        <View style={styles.container}>
            <SubHeader text={"Checkout"}></SubHeader>

            {/* displaying selected cart */}
            <View style={styles.card}>

                {/* style card*/}
                <View style={styles.subCard}>
                    {styleCardData && styleCardData.image && <Image source={styleCardData.image} />}
                    <Text style={[styles.cardTitle, { flex: 1 }]}>{styleCardData.name}</Text>
                    <TouchableOpacity onPress={() => { switchScreenToEdit(screens.STYLE) }}><Text style={styles.cardTitle}>Edit</Text></TouchableOpacity>
                </View>
                <View style={styles.border} />

                {/* size card*/}
                {sizeCardData && <><View style={styles.subCard}>
                    {sizeCardData && sizeCardData.image && <Image source={sizeCardData.image} />}
                    <Text style={[styles.cardTitle, { flex: 1 }]}>{sizeCardData?.name}</Text>
                    <TouchableOpacity onPress={() => { switchScreenToEdit(screens.SIZE) }}><Text style={styles.cardTitle}>Edit</Text></TouchableOpacity>
                </View>
                    <View style={styles.border}></View>
                </>}
                {/* extra card*/}

                {
                    extraCardsData && extraCardsData.map(extraCardData => {
                        return (
                            <View key={extraCardData._id}>
                                <View style={styles.subCard} >
                                    {extraCardData && extraCardData.image && <Image source={extraCardData.image} />}
                                    <Text style={[styles.cardTitle, { flex: 1 }]}>{extraCardData.name}</Text>
                                    <TouchableOpacity><Text style={styles.cardTitle}
                                        onPress={() => { switchScreenToEdit(screens.EXTRA) }}>Edit</Text></TouchableOpacity>
                                </View>
                                {/* sub selected card */}
                                <View style={styles.border}></View>
                                <View style={styles.subSectionCard} >
                                    <Text style={styles.cardTitle}>{extraCardData.subselections.name}</Text>
                                    <Image style={styles.icon} source={require('../assets/radio-button-checked.png')} />
                                </View>
                                <View style={styles.border}></View>
                            </View>
                        )
                    })
                }

            </View>

            <TouchableOpacity style={[styles.card, styles.subCard, {
                position: 'absolute',
                width: '95%',
                bottom: 30,
            }]}
                onPress={onSubmit}>
                <Text style={[styles.cardTitle, { fontWeight: "700" }]}>Brew Your Coffee</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryBackgroundColor,
        display: 'flex',
        height: '100%',
        marginBottom: 85
    },
    card: {
        backgroundColor: colors.secondaryBgColor,
        margin: cssConstants.CONTAINER_PADDING,
        padding: cssConstants.CONTAINER_PADDING,
        borderRadius: cssConstants.BASE_BORDER_RADIUS
    },
    subCard:
    {
        height: 55,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: cssConstants.CONTAINER_PADDING,

    },
    border: {
        borderBottomColor: colors.secondaryTextColor,
        borderBottomWidth: cssConstants.BASE_BORDER_WIDTH,
        marginVertical: cssConstants.CONTAINER_PADDING
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
})