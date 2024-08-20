import * as React from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { useState } from 'react';
import quotes from '../../quotes/quotes';
import { useNavigation } from '@react-navigation/native';

function MainScreen() {
  const [randomPhrase, setRandomPhrase] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const navigation = useNavigation();

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomPhrase(quotes[randomIndex]);
  };

  const getRandomNumber = () => {
    const min = 1;
    const max = 30;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(random);
  };

  const handleButtonPress = () => {
    getRandomNumber();
    getRandomPhrase();
  };

  const goToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleExit = () => {
    BackHandler.exitApp();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goToScreen('about')}>
          <Text style={{ color: 'white', fontSize: 35, fontWeight: '200' }}>abt*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.centeredTextUP}>
          {randomNumber !== null ? `[00${randomNumber}]` : 'hi!'}
        </Text>
        <Text style={styles.centeredTextDN}>
          {randomPhrase ? randomPhrase : 'press "again" to get a quote'}
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={{ color: 'white', fontSize: 45, fontWeight: '300' }}>again</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleExit}>
          <Text style={{ color: 'grey', fontSize: 45, fontWeight: '200' }}>quit.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  header: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingTop: 40,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 15,
  },
  centeredTextUP: {
    textAlign: 'left',
    fontSize: 35,
    color: 'gray',
    fontWeight: '200',
  },
  centeredTextDN: {
    textAlign: 'left',
    fontSize: 35,
    color: '#fff',
    fontWeight: '300',
  },
  footer: {
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 90,
  },
};

export default MainScreen;
