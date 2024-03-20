import { Text, View, Image, StyleSheet } from "react-native";
import AppButton from "../Component/AppButton";
import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";

const logo = require("../assets/logo.png");

export default function OnbordingScreen({ navigation: { navigate } }) {
	return (
		<View>
			<Image source={logo} />
			<View>
				<AppButton title="Login" onPress={() => navigate("LogIn")} />
				<AppButton title="SignUp" onPress={() => navigate("SignUp")} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// container: {
	// 	width: '100%',
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	alignContent: 'center',
	// 	alignItems:'center'
	// },
});
