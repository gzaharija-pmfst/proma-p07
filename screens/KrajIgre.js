import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Boje from '../constants/boje'
import GlavniTekst from '../components/GlavniTekst'

const KrajIgre = (props) => {
    return (
        <View style={stil.ekran}>
            <Text>Kraj igre!!</Text>
            <View style={stil.okvirSlike}>
                <Image
                    style={stil.slika}
                    source={ {uri: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrow-2889040_960_720.jpg'} }
                    resizeMode='cover'
                />
            </View>
            <GlavniTekst>Mobitelu je trebalo <Text style={stil.naglasak}>{props.runde}</Text> pokušaja da pogodi broj <Text style={stil.naglasak}>{props.broj}</Text></GlavniTekst>
            <Button title="NOVA IGRA" onPress={props.restart} />
        </View>
    )
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slika: {
        width: '100%',
        height: '100%'
    },
    okvirSlike: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
    },
    naglasak:{
        color: Boje.glavna,
        fontFamily: 'langar'
    }
});

export default KrajIgre
