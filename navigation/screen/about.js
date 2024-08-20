import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AboutScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>

      <View style={styles.centerContainer}>
        <Text style={styles.centeredTextUP}>I'm Cap</Text>
        <Text style={styles.centeredTextDN}>and i'm glad that you're using my app!</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('main')}>
          <Text style={{ color: 'white', fontSize: 45, fontWeight: '300' }}>back.</Text>
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
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
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

export default AboutScreen;
