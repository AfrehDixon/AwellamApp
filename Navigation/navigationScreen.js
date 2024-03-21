import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import OnbordingScreen from "../Screens/Onbording";
import LogInScreen from "../Screens/LogInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import HomePage from "../Screens/HomePage";

const Stack = createNativeStackNavigator();

export default function NavigationScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
			<Stack.Screen name="onbording" component={OnbordingScreen} />
			<Stack.Screen name="Login" component={ LogInScreen } options={{title: 'LogIn'}}/>
			<Stack.Screen name="Signup" component={SignUpScreen} />
		</Stack.Navigator>
	);
}

// function RootStuck () {
//     return (
// 			<Stack.Navigator>
// 				<Stack.Screen
// 					name="onbording"
// 					component={OnbordingScreen}
// 					options={{ headerShown: false }}
// 				/>
// 				<Stack.Screen name='Index' component={Index} />
// 			</Stack.Navigator>
// 		);

// }
