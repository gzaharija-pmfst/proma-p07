import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const UnosBroja = (props) => {
    return(
        <TextInput {...props} style={{...stil.unos, ...props.style}} />
    )
}

const stil = StyleSheet.create({
 unos:{
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginVertical: 10,
    textAlign: 'center'
 }
});

export default UnosBroja