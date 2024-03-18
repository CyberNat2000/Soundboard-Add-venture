import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AdMobInterstitial } from 'expo-ads-admob';

export default function App() {
  useEffect(() => {
    // Inicjalizacja interstitial reklamy przy pierwszym renderowaniu
    AdMobInterstitial.setAdUnitID('YOUR_AD_UNIT_ID');
    AdMobInterstitial.requestAdAsync().then(() => {
      AdMobInterstitial.showAdAsync();
    });

    return () => {
      // Wyczyszczenie interstitial reklamy po wyjściu z aplikacji
      AdMobInterstitial.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      {/* Tutaj możesz umieścić inne komponenty */}
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
});
