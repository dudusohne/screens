import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

export function Home() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.marine_dark2 , colors.marine_dark]}
                style={styles.container}
                start={[3, 0]}
                end={[0,3]}
            >
                        

                <Text style={styles.text}>
                    sound
                </Text>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    text: {
        fontFamily: fonts.bold_italic,
        fontSize: 30,
        textAlign: 'center',
        color: colors.gray2,


    },


})