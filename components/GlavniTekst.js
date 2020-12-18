import React from 'react';
import { StyleSheet, Text, } from 'react-native';

const GlavniTekst = (props) => {
    return (
        <Text style={stil.tekst}>{props.children}</Text>
    )
}

const stil = StyleSheet.create({
    tekst: {
        fontFamily: 'open-sans'
    }
});

export default GlavniTekst
