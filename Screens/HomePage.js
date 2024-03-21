import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Home from './Home'
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function HomePage() {
	return (
		// <NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name={Home} component={HomePage} />
				<Drawer.Screen name={Contact} component={Contact} />
			</Drawer.Navigator>
		// </NavigationContainer>
		// <View><Text>Hoe</Text></View>
	);
}
