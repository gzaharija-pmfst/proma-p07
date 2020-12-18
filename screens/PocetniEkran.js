import React, { useState } from 'react';
import { Alert, Keyboard, Button, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Kartica from '../components/Kartica'
import UnosBroja from '../components/UnosBroja'
import BrojOkvir from '../components/BrojOkvir'
import GlavniTekst from '../components/GlavniTekst'
import NaslovTekst from '../components/NaslovTekst'
import GlobalniStil from '../constants/pocetniStil'
import Tipka from '../components/Tipka'

const PocetniEkran = (props) => {
  const [unos, postaviUnos] = useState('')
  const [odabir, postaviOdabir] = useState(false)
  const [odabraniBroj, postaviOdabraniBroj] = useState()


  const unosProvjeraBroja = (noviUnos) => {
    //postaviUnos(noviUnos)
    postaviUnos(noviUnos.replace(/[^0-9]/g, ''))
  }
  const resetPoljeUnos = () => {
    postaviUnos('')
    postaviOdabir(false)
  }
  const prihvatiOdabir = () => {
    const broj = parseInt(unos)
    if (isNaN(broj) || broj <= 0 || broj > 99) {
      Alert.alert(
        'Neispravni unos!',
        'Unesite broj u rasponu 1-99',
        [{ text: 'Ok', onPress: resetPoljeUnos }]
      )
      return;
    }
    postaviOdabir(true)
    postaviOdabraniBroj(broj)
    postaviUnos('')
    Keyboard.dismiss()
  }
  let prikazBroja;

  if (odabir) {
    prikazBroja = (
      <Kartica style={stil.karticaBroj}>
        <Text>Odabrali ste broj:</Text>
        <BrojOkvir>{odabraniBroj}</BrojOkvir>
        <Button title="POČETAK IGRE" onPress={() => props.zaPocetak(odabraniBroj)} />
      </Kartica>
    )
  } 

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={stil.ekran}>
        <NaslovTekst style={stil.naslov}>Započni novu igru</NaslovTekst>
        <Kartica style={stil.unos}>
          <GlavniTekst>Odaberi jedan broj</GlavniTekst>
          <UnosBroja
            keyboardType='numeric'
            maxLength={2} blurOnSumbit
            style={stil.unosBroja}
            value={unos}
            onChangeText={unosProvjeraBroja}
          />
          <View style={stil.tipke}>
            <Button title="Odustani" onPress={resetPoljeUnos} />
            <Button title="Prihvati" onPress={prihvatiOdabir} />
          </View>
        </Kartica>
        {prikazBroja}
      </View>
    </TouchableWithoutFeedback>
  );
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  naslov: {
    fontSize: 20,
    marginVertical: 10
  },
  unos: {
    width: 300,
    maxWidth: "80%"
  },
  unosBroja: {
    width: 50
  },
  tipke: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  karticaBroj: {
    marginTop: 50,
    alignItems: 'center'
  }
})

export default PocetniEkran
