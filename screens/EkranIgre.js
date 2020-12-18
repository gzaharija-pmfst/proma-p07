import React, { useState, useRef, useEffect } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Boje from '../constants/boje'
import BrojOkvir from '../components/BrojOkvir';
import Kartica from '../components/Kartica';
import GlavniTekst from '../components/GlavniTekst'
import Tipka from '../components/Tipka';
import { Ionicons } from '@expo/vector-icons'

const generirajBroj = (min, max, zanemari) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndBroj = Math.floor(Math.random() * (max - min) + min);
    if (rndBroj === zanemari) {
        return generirajBroj(min, max, zanemari)
    }
    else {
        return rndBroj
    }
}

const EkranIgre = (props) => {
    const prviPokusaj = generirajBroj(1, 100, props.brojKorisnika)
    const [pokusaj, postaviPokusaj] = useState(prviPokusaj)
    const [runde, postaviRunde] = useState([prviPokusaj])

    const trenutniMin = useRef(1)
    const trenutniMax = useRef(100)

    const { brojKorisnika, zaKraj } = props
    useEffect(() => {
        if (pokusaj === brojKorisnika) {
            zaKraj(runde.length)
        }
    }, [pokusaj, brojKorisnika, zaKraj])

    const iduciPokusaj = (savjet) => {
        if ((savjet === 'manji' && pokusaj < props.brojKorisnika) || (savjet === 'veci' && pokusaj > props.brojKorisnika)) {
            Alert.alert(
                'Bez varanja!!!',
                'Odaberite ispravni savjet',
                [{ text: 'OK' }]
            )
            return;
        }
        let noviBroj
        if (savjet === 'manji') {
            trenutniMax.current = pokusaj
        } else {
            trenutniMin.current = pokusaj + 1
        }
        noviBroj = generirajBroj(trenutniMin.current, trenutniMax.current, pokusaj)
        postaviPokusaj(noviBroj)
        //postaviRunde(runde => runde + 1)
        postaviRunde(runde => [noviBroj, ...runde])
    }

    return (
        <View style={stil.ekran}>
            <GlavniTekst>Pokušaj računala:</GlavniTekst>
            <BrojOkvir>{pokusaj}</BrojOkvir>
            <Kartica style={stil.tipke}>
                <Tipka onPress={() => iduciPokusaj('manji')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </Tipka>
                <Tipka onPress={() => iduciPokusaj('veci')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </Tipka>
            </Kartica>
            <View style={stil.lista}>
                <ScrollView>
                    {runde.map((runda, indeks) => {
                        return (
                            <View key={runda} style={stil.ispisRundi}>
                                <Text>#{runde.length - indeks}</Text>
                                <Text>{runda}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const stil = StyleSheet.create({

    ekran: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    tipke: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    ispisRundi: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lista:{
        flex: 1,
        width: '80%'
    }
});

export default EkranIgre
