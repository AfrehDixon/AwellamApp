import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import usef

import AppButton from "./Component/AppButton";

import NavigationScreen from "./Navigation/navigationScreen";
import HomePage from "./Screens/HomePage";

export default function App() {
	const [appReady, setappReady] = useState(false);
	const Drawer = createDrawerNavigator();

	// useEffect( () => {
	//   async function prepare () {
	//     try {
	//       await
	//     }

	//   }
	// })

	return (
		<NavigationContainer>
			{/* <NavigationScreen /> */}
			{/* <Drawer.Navigator>
				<Drawer.Screen name={Home} component={HomePage} />
				<Drawer.Screen name={Contact} component={Contact} />
			</Drawer.Navigator> */}
			<View><Text>dfasf</Text></View>

			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
