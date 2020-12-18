import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Kartica = (props) => {
    return(
        <View style={{...stil.kartica, ...props.style}}>
          {props.children}
        </View>
    )
}

const stil = StyleSheet.create({
    kartica: {
        alignItems: "center",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 7,
        padding: 20
    }
});

export default Kartica
