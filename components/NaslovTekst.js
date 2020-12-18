import React from 'react';
import { StyleSheet, Text, } from 'react-native';

const NaslovTekst = (props) => {
    return (
        <Text style={{...stil.tekst, ...props.style}}>{props.children}</Text>
    )
}

const stil = StyleSheet.create({
    tekst: {
        fontFamily: 'open-sans-bold'
    }
});

export default NaslovTekst
