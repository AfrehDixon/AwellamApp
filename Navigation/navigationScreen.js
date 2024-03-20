import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnbordingScreen from "../Screens/Onbording";
import Index from "../Index";
import LogInScreen from "../Screens/LogInScreen";
import SignUpScreen from "../Screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function NavigationScreen() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="onbording"
					component={OnbordingScreen}
					// options={{ headerShown: false }}
				/>
				<Stack.Screen name="LogIn" component={LogInScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				<Stack.Screen name="Index" component={Index} />
			</Stack.Navigator>
		</NavigationContainer>
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
