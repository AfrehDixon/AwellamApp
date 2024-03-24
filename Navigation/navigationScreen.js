import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import OnbordingScreen from "../Screens/Onbording";
import LogInScreen from "../Screens/LogInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import HomePage from "../Screens/HomePage";
import MyDrawer from "../Screens/MyDrawer";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function NavigationScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="onbording" component={OnbordingScreen} />
			<Stack.Screen
				name="Login"
				component={LogInScreen}
				options={{ title: "LogIn" }}
			/>
			<Stack.Screen name="Signup" component={SignUpScreen} />
			<Stack.Screen
				name="Home"
				component={MyDrawer}
			
			/>
		</Stack.Navigator>
	);
}

