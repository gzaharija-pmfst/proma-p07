import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boje from '../constants/boje'

const BrojOkvir = (props) => {
    return(
        <View style={stil.okvir}>
          <Text style={stil.broj}>{props.children}</Text>
        </View>
    )
}

const stil = StyleSheet.create({
okvir:{
    borderWidth: 2,
    borderColor: Boje.naglasak,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
},
broj:{
    color: Boje.glavna,
    fontSize: 25
}
});

export default BrojOkvir
