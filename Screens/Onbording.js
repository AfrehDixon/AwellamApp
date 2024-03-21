import { Text, View, Image, StyleSheet } from "react-native";
import AppButton from "../Component/AppButton";
import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";
import { TouchableOpacity } from "react-native-web";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const logo = require("../assets/logo.png");

export default function OnbordingScreen({ navigation }) {
	return (
		<View>
			<Image source={logo} />
			<View>
				<View>
					<AppButton
						title="Login"
						onPress={()=> navigation.navigate('Login')}
					/>
				</View>
				<View>
					<AppButton
						title="SignUp"
						onPress={() => navigation.navigate('Signup')}
					/>
				</View>
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
