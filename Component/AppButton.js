import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function AppButton({ title, style, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			 <View> 
				<Text styles={styles.txtbtn}>{title} </Text>
			</View> 
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "yellow",
		borderRadius: 25,
		padding: 20,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%'
	},
	txtbtn: {
		textAlign: 'center',
		fontSize: 40,
		color: 'white'
	}
});
