import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AdMobInterstitial } from 'expo-ads-admob';

export default function App() {
  const [adCount, setAdCount] = useState(0);

  useEffect(() => {
    // Inicjalizacja interstitial reklamy przy pierwszym renderowaniu
    AdMobInterstitial.setAdUnitID('YOUR_AD_UNIT_ID');
    AdMobInterstitial.requestAdAsync().then(() => {
      AdMobInterstitial.showAdAsync();
    });

    const adListener = AdMobInterstitial.addEventListener('interstitialDidLoad', () => {
      setAdCount(prevCount => prevCount + 1);
    });

    return () => {
      // Wyczyszczenie interstitial reklamy po wyjściu z aplikacji
      AdMobInterstitial.removeAllListeners();
    };
  }, []);

  // Obsługa kliknięcia przycisku dźwięku
  const handleSoundPress = () => {
    // Tutaj możesz umieścić logikę odtwarzania dźwięku
    console.log('Dźwięk został odtworzony');
  };

  return (
    <View style={styles.container}>
      <View style={styles.adCountContainer}>
        <Text>Liczba wyświetlonych reklam: {adCount}</Text>
      </View>
      <Text>Hello, world!</Text>
      <View style={styles.buttonContainer}>
        {/* Przyciski dźwięków */}
        <TouchableOpacity style={styles.soundButton} onPress={handleSoundPress}>
          <Text>Dźwięk 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.soundButton} onPress={handleSoundPress}>
          <Text>Dźwięk 2</Text>
        </TouchableOpacity>
        {/* Tutaj możesz dodać więcej przycisków */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adCountContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  soundButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 5,
  },
});
