import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Naslov = (props) => {
  return (
    <View style={stil.zaglavlje}>
      <Text style={stil.naslov}>{props.naslov}</Text>
    </View>
  );
}

const stil = StyleSheet.create({
 naslov: {
   color: "black",
   fontSize: 18,
   fontFamily: 'langar'
 },
 zaglavlje: {
   width: '100%',
   height: 90,
   paddingTop: 35,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#f72877'
 }
});

export default Naslov
