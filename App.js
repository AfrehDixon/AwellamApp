import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
// import usef


import AppButton from './Component/AppButton';

import NavigationScreen from './Navigation/navigationScreen';


export default function App () {
  const [appReady, setappReady] = useState( false )
  
  

  // useEffect( () => {
  //   async function prepare () {
  //     try {
  //       await 
  //     }
      
  //   }
  // })

  return (
		<View style={styles.container}>
      <NavigationScreen />

      
		

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
  
});
